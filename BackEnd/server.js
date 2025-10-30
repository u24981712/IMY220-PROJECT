const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 8000;
const { MongoClient, ObjectId } = require("mongodb");

// SETTING UP MULTER FOR IMAGE UPLOADING
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

// Mongo
const USER = "test-user";
const PASSWORD = "test-password";
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@imy220.viyovyv.mongodb.net/MY220`;
const DB_NAME = "codexDB";

let CLIENT;
let DATABASE;
const usersCollection = "users";
const testimonialsCollection = "testimonials";
const projectsCollection = "projects";

async function connectToMongo() {
  try {
    CLIENT = new MongoClient(MONGO_URI);

    await CLIENT.connect();

    DATABASE = CLIENT.db(DB_NAME);

    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);

    throw error;
  }
}

// MIDDLEWARE
app.use(express.static("FrontEnd/public"));
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Bruhhh" });
});

const uploadFile = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

app.post(
  "/uploadBanner/:projectName",
  upload.single("banner"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image file provided" });
      }

      if (req.file.size > 1 * 1024 * 1024) {
        return res
          .status(400)
          .json({ error: "File too large. Max 1MB allowed." });
      }

      const projectName = req.params.projectName;
      const email = req.body.email;
      const base64Image = req.file.buffer.toString("base64");

      const result = await DATABASE.collection(projectsCollection).updateOne(
        {
          projectName: projectName,
          email: email,
        },
        {
          $set: {
            banner: {
              imageBase64: base64Image,
              contentType: req.file.mimetype,
              fileSize: req.file.size,
              originalName: req.file.originalname,
            },
          },
        }
      );

      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.json({
        message: "Banner uploaded successfully",
        banner: {
          contentType: req.file.mimetype,
          fileSize: req.file.size,
        },
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Upload failed" });
    }
  }
);

// app.post(
//   "/uploadFile/:projectName",
//   uploadFile.single("file"),
//   async (req, res) => {
//     try {
//       if (!req.file) {
//         return res.status(400).json({ error: "No file provided" });
//       }

//       const projectName = decodeURIComponent(req.params.projectName);
//       const email = req.body.email;
//       const fileName = req.body.fileName || req.file.originalname;
//       const checkInMessage = req.body.checkInMessage || "No message provided";

//       const base64File = req.file.buffer.toString("base64");
//       const date = new Date().toISOString();
//       const dateOnly = date.split("T")[0];

//       const newMessage = {
//         message: checkInMessage,
//         date: dateOnly,
//         fileName: fileName,
//         uploadedBy: email,
//         timestamp: dateOnly,
//       };

//       const result = await DATABASE.collection(projectsCollection).updateOne(
//         { projectName: projectName, email: email },
//         {
//           $push: {
//             files: {
//               fileName: fileName,
//               fileType: req.file.mimetype,
//               fileSize: req.file.size,
//               content: base64File,
//               uploadedAt: dateOnly,
//             },
//             messages: newMessage,
//           },
//         }
//       );

//       if (result.modifiedCount === 0) {
//         return res.status(404).json({ error: "Project not found" });
//       }

//       const project = await DATABASE.collection(projectsCollection).findOne({
//         projectName: projectName,
//         email: email,
//       });

//       res.json({
//         message: "File uploaded successfully",
//         project: project,
//       });
//     } catch (error) {
//       console.error("Upload error:", error);
//       res.status(500).json({ error: "Upload failed" });
//     }
//   }
// );

app.post(
  "/uploadFile/:projectName",
  uploadFile.array("files", 10),
  async (req, res) => {
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No files provided" });
      }

      const projectName = decodeURIComponent(req.params.projectName);
      const email = req.body.email;
      const checkInMessage = req.body.checkInMessage || "No message provided";

      const date = new Date().toISOString();
      const dateOnly = date.split("T")[0];

      const newFiles = req.files.map((file) => ({
        fileName: file.originalname,
        fileType: file.mimetype,
        fileSize: file.size,
        content: file.buffer.toString("base64"),
        uploadedAt: dateOnly,
      }));

      const fileNames = req.files.map((file) => file.originalname).join(", ");

      const newMessage = {
        message: checkInMessage,
        date: dateOnly,
        fileName: fileNames,
        uploadedBy: email,
        timestamp: dateOnly,
        fileCount: req.files.length,
      };

      const result = await DATABASE.collection(projectsCollection).updateOne(
        { projectName: projectName, email: email },
        {
          $push: {
            files: { $each: newFiles },
            messages: newMessage,
          },
        }
      );

      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: "Project not found" });
      }

      const project = await DATABASE.collection(projectsCollection).findOne({
        projectName: projectName,
        email: email,
      });

      res.json({
        message: `${req.files.length} file(s) uploaded successfully`,
        project: project,
        filesUploaded: req.files.length,
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Upload failed" });
    }
  }
);
app.post("/uploadProfileImage", uploadFile.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    if (!req.file.mimetype.startsWith("image/")) {
      return res.status(400).json({ error: "Only image files are allowed" });
    }

    const email = req.body.email;
    const base64File = req.file.buffer.toString("base64");
    const dataUrl = `data:${req.file.mimetype};base64,${base64File}`;

    const result = await DATABASE.collection(usersCollection).updateOne(
      { email: email },
      {
        $set: {
          profileImage: dataUrl,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = await DATABASE.collection(usersCollection).findOne(
      { email: email },
      { projection: { password: 0 } }
    );

    res.json({
      message: "Profile image updated successfully",
      user: user,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

app.get("/downloadFile/:projectName/:fileName", async (req, res) => {
  try {
    const { projectName, fileName } = req.params;

    const email = req.query.email;

    const project = await DATABASE.collection("projects").findOne({
      projectName: projectName,
      email: email,
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const file = project.files.find((f) => f.fileName === fileName);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    const fileBuffer = Buffer.from(file.content, "base64");

    res.setHeader("Content-Type", "application/octet-stream");

    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);

    res.send(fileBuffer);
  } catch (error) {
    console.error("Download error:", error);

    res.status(500).json({ message: "Error downloading file" });
  }
});

app.post("/deleteFile", async (req, res) => {
  try {
    const { projectName, fileName, email } = req.body;

    if (!projectName || !fileName || !email) {
      return res
        .status(400)
        .json({ message: "Project name, file name, and email are required" });
    }

    const result = await DATABASE.collection(projectsCollection).updateOne(
      {
        projectName: projectName,
        email: email,
      },
      {
        $pull: {
          files: { fileName: fileName },
        },
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "File or project not found" });
    }

    res.json({
      message: "File deleted successfully",
      deletedFile: fileName,
    });
  } catch (error) {
    console.error("Delete file error:", error);

    res.status(500).json({
      message: "Error deleting file",
      error: error.message,
    });
  }
});

app.post("/AddCollaborator", async (req, res) => {
  try {
    const { projectName, ownerEmail, friendEmail } = req.body;

    if (!projectName || !ownerEmail || !friendEmail) {
      return res.status(400).json({
        message: "Project name, owner email, and friend email are required",
      });
    }

    const result = await DATABASE.collection(projectsCollection).updateOne(
      {
        projectName: projectName,
        email: ownerEmail,
      },
      {
        $push: {
          collaborators: friendEmail,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "Project not found or you're not the owner" });
    }

    res.json({
      message: "Collaborator added successfully",
      addedCollaborator: friendEmail,
    });
  } catch (error) {
    console.error("Add collaborator error:", error);

    res.status(500).json({
      message: "Error adding collaborator",
      error: error.message,
    });
  }
});

app.post("/RemoveCollaborator", async (req, res) => {
  try {
    const { projectName, ownerEmail, friendEmail } = req.body;

    if (!projectName || !ownerEmail || !friendEmail) {
      return res.status(400).json({
        message: "Project name, owner email, and friend email are required",
      });
    }

    if (friendEmail === ownerEmail) {
      return res.status(400).json({
        message: "Cannot remove the project owner from collaborators",
      });
    }

    const result = await DATABASE.collection(projectsCollection).updateOne(
      {
        projectName: projectName,
        email: ownerEmail,
      },
      {
        $pull: {
          collaborators: friendEmail,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        message:
          "Project not found, you're not the owner, or collaborator not found",
      });
    }

    res.json({
      message: "Collaborator removed successfully",
      removedCollaborator: friendEmail,
    });
  } catch (error) {
    console.error("Remove collaborator error:", error);

    res.status(500).json({
      message: "Error removing collaborator",
      error: error.message,
    });
  }
});

/**************************************************************************/
// PROJECT BASED ENDPOINTS
/**************************************************************************/

app.get("/getProjects", async (req, res) => {
  try {
    const projects = await DATABASE.collection(projectsCollection)
      .find()
      .toArray();

    if (projects.length === 0) {
      // console.log("No projects found");

      res.json({ message: "No projects found" });
    } else {
      res.status(200).json(projects);
    }
  } catch (error) {
    console.error("Error reading Users.json:", error);

    res.status(500).json({ error: "Failed to retreive projects" });
  }
});

app.get("/getProject/:projectName", async (req, res) => {
  try {
    const projectName = req.params.projectName;

    const email = req.query.email;

    const project = await findOneProject(email, projectName);

    if (project) {
      res.status(200).json(project);
    } else {
      res.json({ message: "Project not found" });
    }
  } catch (error) {
    console.error("Error: ", error);

    res.status(500).json({ error: "Failed to retreive project" });
  }
});

app.get("/getProjects/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const projects = await findManyProject(email);

    if (projects && projects.length > 0) {
      // console.log(`Found ${projects.length} projects for ${email}`);

      res.status(200).json(projects);
    } else {
      res.json({ message: "Projects not found for this user" });
    }
  } catch (error) {
    console.error("Error: ", error);

    res.status(500).json({ error: "Failed to retreive project" });
  }
});

app.post("/newProject", async (req, res) => {
  try {
    // FIRST CHECK IF A PROJECT WITH THE SAME NAME BY THE SAME USER EXISTS
    const { projectName, email } = req.body;

    // const existingProject = await DATABASE.collection(projectsCollection).findOne({
    //   email: email,
    //   projectName: projectName
    // });

    const existingProject = await findOneProject(email, projectName);

    if (existingProject) {
      return res.json({ message: "Project name already exists" }); // IMPORTANT: return here
    }

    const date = new Date().toISOString();
    const dateOnly = date.split("T")[0];
    // ONLY INSERT THE DOCUMENT IF SIMILAR NAME DOESN'T EXIST
    const projectData = {
      ...req.body,
      dateCreated: dateOnly,
    };

    const result = await DATABASE.collection(projectsCollection).insertOne(
      projectData
    );

    res.json({
      message: "Project saved successfully",
      projectId: result.insertedId,
    });
  } catch (error) {
    console.error("Error: ", error);

    res.status(500).json({ message: "Error saving project" });
  }
});

app.post("/updateProject", async (req, res) => {
  try {
    const { oldProjectName, newProjectName, label, email } = req.body;

    if (!oldProjectName || !newProjectName || !label || !email) {
      return res.status(400).json({
        message:
          "Old project name, new project name, label, and email are required",
      });
    }

    // DON'T ALLOW DUPLICATE PROJECT NAMES FOR THE SAME USER
    if (oldProjectName !== newProjectName) {
      const existingProject = await DATABASE.collection(
        projectsCollection
      ).findOne({
        projectName: newProjectName,
        email: email,
      });

      if (existingProject) {
        return res.status(400).json({
          message: "A project with this name already exists",
        });
      }
    }

    const result = await DATABASE.collection(projectsCollection).updateOne(
      {
        projectName: oldProjectName,
        email: email,
      },
      {
        $set: {
          projectName: newProjectName,
          Label: label,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({
        message: "Project not found or no changes made",
      });
    }

    res.json({
      message: "Project updated successfully",
      projectName: newProjectName,
    });
  } catch (error) {
    console.error("Update project error:", error);
    res.status(500).json({
      message: "Error updating project",
      error: error.message,
    });
  }
});
/***************************************************************************/
// FILE BASED ENDPOINTS
/***************************************************************************/

app.get("/getFileContent/:projectName/:fileName", async (req, res) => {
  try {
    const { projectName, fileName } = req.params;
    const email = req.query.email;

    const project = await DATABASE.collection(projectsCollection).findOne({
      projectName: decodeURIComponent(projectName),
      email: email,
    });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const file = project.files.find(
      (f) => f.fileName === decodeURIComponent(fileName)
    );

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    const fileBuffer = Buffer.from(file.content, "base64");
    const fileContent = fileBuffer.toString("utf-8");

    res.json({
      fileName: file.fileName,
      content: fileContent,
      fileType: file.fileType,
      uploadedAt: file.uploadedAt,
    });
  } catch (error) {
    console.error("Get file content error:", error);
    res.status(500).json({
      message: "Error retrieving file content",
      error: error.message,
    });
  }
});

/***************************************************************************/
// DELETE PROJECT
/***************************************************************************/

app.post("/deleteProject", async (req, res) => {
  try {
    const { projectName, email } = req.body;

    // if (!projectName || !email) {
    //   return res.status(400).json({ message: 'Project name and email are required' });
    // }

    const result = await DATABASE.collection(projectsCollection).deleteOne({
      projectName: projectName,
      email: email,
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Project not found or already deleted",
      });
    }

    res.json({
      message: "Project deleted successfully",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error("Delete error: ", error);
    res.status(500).json({
      message: "Error deleting project",
      error: error.message,
    });
  }
});

/***************************************************************************/
// USER RELATED ENDPOINTS
/***************************************************************************/

app.get("/getUsers", async (req, res) => {
  try {
    const users = await DATABASE.collection(usersCollection).find().toArray();

    if (users.length === 0) {
      console.log("No projects found");

      res.json({ message: "No users found" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    console.error("Error reading Users.json:", error);

    res.status(500).json({ error: "Failed to retreive projects" });
  }
});

app.get("/getUser/:email", async (req, res) => {
  try {
    const email = req.params.email;

    if (!email || email === "undefined") {
      return res.status(400).json({ error: "Invalid email parameter" });
    }

    const user = await DATABASE.collection(usersCollection).findOne({ email });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to retrieve user" });
  }
});

app.get("/getTestimonials", async (req, res) => {
  try {
    const testimonials = await DATABASE.collection(testimonialsCollection)
      .find()
      .toArray();

    if (testimonials) {
      // console.log(testimonials);
    }

    res.json(testimonials);
  } catch (error) {
    res.status(404).json({ message: "Failed to retreive testimonial data" });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const newUser = req.body;
    const { email } = newUser;

    const user = await DATABASE.collection(usersCollection).findOne({ email });

    if (user) {
      console.log("User already exist");
      res.status(400).json({ message: "User already exist" });
    } else {
      const { confirmpassword, ...userToSave } = newUser;

      await DATABASE.collection(usersCollection).insertOne(userToSave);

      res.status(201).json({
        message: "User created successfully",
        user: userToSave,
      });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
});

app.get("/getEmails", async (req, res) => {
  try {
    const users = await DATABASE.collection(usersCollection)
      .find(
        {},
        {
          projection: { email: 1 },
        }
      )
      .toArray();

    if (users.length === 0) {
      console.log("No users found");

      res.json({ error: "No users found" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retreive users" });
  }
});

// SEND FREIND REQEUST
app.post("/sendFriendRequest", async (req, res) => {
  try {
    const { email, receiverEmail } = req.body;

    if (!email || !receiverEmail) {
      return res
        .status(400)
        .json({ message: "Sender username and receiver email are required" });
    }

    const receiver = await DATABASE.collection(usersCollection).findOne({
      email: receiverEmail,
    });

    if (!receiver) {
      return res.status(404).json({ message: "User not found" });
    }

    const sender = await DATABASE.collection(usersCollection).findOne({
      email: email,
    });

    if (!sender) {
      return res.status(404).json({ message: "Sender not found" });
    }

    console.log(receiver.friendRequests);

    const friendRequests = receiver.friendRequests || [];
    const followers = receiver.followers || [];

    if (friendRequests.includes(email)) {
      return res.json({ message: "Friend request already sent" });
    }

    if (followers.includes(email)) {
      return res.json({ message: "This user is already following you" });
    }

    const result = await DATABASE.collection("users").updateOne(
      { email: receiverEmail },
      {
        $push: {
          friendRequests: email,
        },
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(500).json({ message: "Failed to send friend request" });
    }

    res.json({
      message: "Friend request sent successfully",
      receiver: receiver.name,
    });
  } catch (error) {
    console.error("Error sending friend request:", error);
    res.status(500).json({
      message: "Error sending friend request",
      error: error.message,
    });
  }
});

// ACCEPT FRIEND REQUEST
app.post("/acceptFriendRequest", async (req, res) => {
  try {
    const { currentUserEmail, requesterEmail } = req.body;

    if (!currentUserEmail || !requesterEmail) {
      return res
        .status(400)
        .json({ message: "User email and requester email are required" });
    }

    const user = await DATABASE.collection(usersCollection).findOne({
      email: currentUserEmail,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const requester = await DATABASE.collection(usersCollection).findOne({
      email: requesterEmail,
    });

    if (!requester) {
      return res.status(404).json({ message: "Requester not found" });
    }

    // const friendRequests = user.friendRequests || [];
    console.log(user.friendRequests.includes(requesterEmail));

    if (!user.friendRequests.includes(requesterEmail)) {
      return res.status(400).json({ message: "Friend request not found" });
    }

    // const followers = user.followers || [];

    console.log(user.followers.includes(requesterEmail));

    if (user.followers.includes(requesterEmail)) {
      return res.status(400).json({ message: "Already following this user" });
    }

    const session = CLIENT.startSession();

    try {
      await session.withTransaction(async () => {
        await DATABASE.collection(usersCollection).updateOne(
          { email: currentUserEmail },
          {
            $pull: { friendRequests: requesterEmail },
            $addToSet: { followers: requesterEmail },
          },
          { session }
        );

        await DATABASE.collection(usersCollection).updateOne(
          { email: requesterEmail },
          {
            $addToSet: { following: currentUserEmail },
          },
          { session }
        );
      });
    } finally {
      await session.endSession();
    }

    res.json({
      message: "Friend request accepted successfully",
      newFollower: {
        email: requesterEmail,
        name: requester.name,
        profileImage: requester.profileImage,
      },
    });
  } catch (error) {
    console.error("Error accepting friend request:", error);
    res.status(500).json({
      message: "Error accepting friend request",
      error: error.message,
    });
  }
});

// ACCEPT FRIEND REQUEST
app.post("/declineFriendRequest", async (req, res) => {
  try {
    const { currentUserEmail, requesterEmail } = req.body;

    if (!currentUserEmail || !requesterEmail) {
      return res
        .status(400)
        .json({ message: "User email and requester email are required" });
    }

    const user = await DATABASE.collection(usersCollection).findOne({
      email: currentUserEmail,
    });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    const friendRequests = user.friendRequests || [];

    if (!friendRequests.includes(requesterEmail)) {
      return res.json({ message: "Friend request not found" });
    }

    const result = await DATABASE.collection(usersCollection).updateOne(
      { email: currentUserEmail },
      {
        $pull: { friendRequests: requesterEmail },
      }
    );

    if (result.modifiedCount === 0) {
      return res.json({ message: "Failed to decline friend request" });
    }

    res.json({
      message: "Friend request declined successfully",
      declinedRequest: requesterEmail,
    });
  } catch (error) {
    console.error("Error declining friend request:", error);
    res.status(500).json({
      message: "Error declining friend request",
      error: error.message,
    });
  }
});

app.put("/updateUser", async (req, res) => {
  try {
    const userData = req.body;
    const { email } = userData;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const { _id, ...updateData } = userData;

    const result = await DATABASE.collection(usersCollection).updateOne(
      { email: email },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const updatedUser = await DATABASE.collection(usersCollection).findOne({
      email: email,
    });

    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Failed to update user" });
  }
});

app.delete("/deleteProfile", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Verify user exists
    const user = await DATABASE.collection(usersCollection).findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const session = CLIENT.startSession();

    try {
      await session.withTransaction(async () => {
        const projectsResult = await DATABASE.collection(
          projectsCollection
        ).deleteMany({ email: email }, { session });

        await DATABASE.collection(usersCollection).updateMany(
          {
            $or: [
              { followers: email },
              { following: email },
              { friendRequests: email },
            ],
          },
          {
            $pull: {
              followers: email,
              following: email,
              friendRequests: email,
            },
          },
          { session }
        );

        const userResult = await DATABASE.collection(usersCollection).deleteOne(
          { email: email },
          { session }
        );

        if (userResult.deletedCount === 0) {
          throw new Error("Failed to delete user");
        }
      });

      res.json({
        message: "Profile and all associated data deleted successfully",
        projectsDeleted: await DATABASE.collection(
          projectsCollection
        ).countDocuments({ email }),
      });
    } finally {
      await session.endSession();
    }
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({
      message: "Error deleting profile",
      error: error.message,
    });
  }
});

/**************************************************************************************/
// TESTIMONIAL ENDPOINT
/**************************************************************************************/

app.get("/getProfileImages", async (req, res) => {
  try {
    const profileImages = await DATABASE.collection("profileImages")
      .find({}, { projection: { _id: 0 } })
      .toArray();

    if (profileImages.length === 0) {
      console.log("No profile images found");

      res.json({ error: "No profile images found" });
    } else {
      res.status(200).json(profileImages);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retreive users" });
  }
});

// DRY: DON'T REPEAT YOURSELF BUDDY
const findOneProject = async (email, projectName) => {
  const Project = await DATABASE.collection(projectsCollection).findOne({
    email: email,
    projectName: projectName,
  });

  return Project;
};

const findManyProject = async (email) => {
  const Projects = await DATABASE.collection(projectsCollection)
    .find({
      email: email,
    })
    .toArray();

  return Projects;
};

app.get("/{*any}", (req, res) => {
  res.sendFile(path.resolve("FrontEnd/public", "index.html"));
});

async function startServer() {
  try {
    await connectToMongo();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

startServer();
