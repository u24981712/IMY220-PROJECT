const express = require("express");
const multer = require('multer');
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 8000;
const { MongoClient, ObjectId } = require('mongodb');

// SETTING UP MULTER FOR IMAGE UPLOADING
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {

    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Mongo 
const USER = "test-user";
const PASSWORD = "test-password";
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@imy220.viyovyv.mongodb.net/MY220`;
const DB_NAME = 'codexDB';

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

    console.log('Connected to MongoDB successfully');

  } catch (error) {

    console.error('Error connecting to MongoDB:', error);

    throw error;
  }
}

// MIDDLEWARE
app.use(express.static("FrontEnd/public"));
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: "Bruhhh" })
})

app.post('/uploadBanner/:projectName', upload.single('banner'), async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    if (req.file.size > 1 * 1024 * 1024) {
      return res.status(400).json({ error: 'File too large. Max 1MB allowed.' });
    }

    const projectName = req.params.projectName;
    const email = req.body.email;
    const base64Image = req.file.buffer.toString('base64');

    const result = await DATABASE.collection(projectsCollection).updateOne(
      {
        projectName: projectName,
        email: email
      },
      {
        $set: {
          banner: {
            imageBase64: base64Image,
            contentType: req.file.mimetype,
            fileSize: req.file.size,
            originalName: req.file.originalname,
          }
        }
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({
      message: 'Banner uploaded successfully',
      banner: {
        contentType: req.file.mimetype,
        fileSize: req.file.size
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

const uploadFile = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit for code files
  }
});

app.post('/uploadFile/:projectName', uploadFile.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const projectName = decodeURIComponent(req.params.projectName);
    const email = req.body.email;
    const fileName = req.body.fileName || req.file.originalname;

    const base64File = req.file.buffer.toString('base64');

    const result = await DATABASE.collection(projectsCollection).updateOne(
      {
        projectName: projectName,
        email: email
      },
      {
        $push: {
          files: {
            fileName: fileName,
            fileType: req.file.mimetype,
            fileSize: req.file.size,
            content: base64File,
            uploadedAt: new Date()
          }
        }
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({
      message: 'File uploaded successfully',
      file: {
        fileName: fileName,
        fileType: req.file.mimetype,
        fileSize: req.file.size
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

/************************************************************************* */

app.get('/getProjects', async (req, res) => {

  try {

    const projects = await DATABASE.collection(projectsCollection).find().toArray();

    if (projects.length === 0) {

      // console.log("No projects found");

      res.json({ message: "No projects found" });

    } else {

      res.status(200).json(projects);

    }

  } catch (error) {

    console.error('Error reading Users.json:', error);

    res.status(500).json({ error: 'Failed to retreive projects' });
  }
});

app.get('/getProject/:projectName', async (req, res) => {

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

    console.error('Error: ', error);

    res.status(500).json({ error: 'Failed to retreive project' });
  }
});

app.get('/getProjects/:email', async (req, res) => {

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

    console.error('Error: ', error);

    res.status(500).json({ error: 'Failed to retreive project' });
  }
});

app.get('/getUsers', async (req, res) => {
  try {

    const users = await DATABASE.collection(usersCollection).find().toArray();

    if (users.length === 0) {

      console.log("No projects found");

      res.json({ message: "No users found" });

    } else {

      res.status(200).json(users);

    }

  } catch (error) {

    console.error('Error reading Users.json:', error);

    res.status(500).json({ error: 'Failed to retreive projects' });
  }

});

app.get('/getUser/:email', async (req, res) => {
  try {
    const email = req.params.email;

    if (!email || email === 'undefined') {
      return res.status(400).json({ error: "Invalid email parameter" });
    }

    const user = await DATABASE.collection(usersCollection).findOne({ email });

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);

  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
});

/*********** TESTIMONIAL ENDPOINT ************/

app.get('/getTestimonials', async (req, res) => {
  try {

    const testimonials = await DATABASE.collection(testimonialsCollection).find().toArray();

    if (testimonials) {
      // console.log(testimonials);
    }

    res.json(testimonials);

  } catch (error) {

    res.status(404).json({ message: 'Failed to retreive testimonial data' });
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
        user: userToSave
      });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.get('/getEmails', async (req, res) => {
  try {

    const users = await DATABASE.collection(usersCollection).find({}, {
      projection: { email: 1 }
    }).toArray();

    if (users.length === 0) {

      console.log("No users found");

      res.json({ error: "No users found" });

    } else {

      res.status(200).json(users);

    }

  } catch (error) {

    res.status(500).json({ error: 'Failed to retreive users' });
  }
});

/*********** SAVE NEW PROJECT ENDPOINT ************/

app.post('/newProject', async (req, res) => {
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
    const dateOnly = date.split('T')[0];
    // ONLY INSERT THE DOCUMENT IF SIMILAR NAME DOESN'T EXIST
    const projectData = {
      ...req.body,
      dateCreated: dateOnly
    };

    const result = await DATABASE.collection(projectsCollection).insertOne(projectData);

    res.json({
      message: "Project saved successfully",
      projectId: result.insertedId
    });

  } catch (error) {

    console.error('Error: ', error);

    res.status(500).json({ message: 'Error saving project' });

  }
});



app.post('/addFollowing', async (req, res) => {
  try {
    const users = await DATABASE.collection(usersCollection).find({}).toArray();

    const results = [];

    for (const user of users) {

      let following = [];

      if (user.email === "u24981712@tuks.co.za") {
        // Njabulo follows backend and mobile developers
        following = ["robert.j@example.com", "michael.b@example.com"];
      } else if (user.email === "jane.smith@example.com") {
        // Jane follows other frontend developers
        following = ["u24981712@tuks.co.za"];
      } else if (user.email === "robert.j@example.com") {
        // Robert follows full-stack and backend developers
        following = ["u24981712@tuks.co.za", "michael.b@example.com"];
      } else if (user.email === "michael.b@example.com") {
        // Michael follows frontend and backend developers
        following = ["jane.smith@example.com", "robert.j@example.com"];
      }

      const result = await DATABASE.collection(usersCollection).updateOne(
        { _id: user._id },
        { $set: { following: following } }
      );

      results.push({
        name: user.name,
        email: user.email,
        following: following,
        modifiedCount: result.modifiedCount
      });
    }

    res.json({
      message: 'Following arrays added to all users',
      results: results
    });

  } catch (error) {
    console.error('Error adding following:', error);
    res.status(500).json({ error: 'Failed to add following arrays' });
  }
});



// DELETE PROJECT
app.post('/deleteProject', async (req, res) => {
  try {
    const { projectName, email } = req.body;

    // if (!projectName || !email) {
    //   return res.status(400).json({ message: 'Project name and email are required' });
    // }

    const result = await DATABASE.collection(projectsCollection).deleteOne({
      projectName: projectName,
      email: email
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: 'Project not found or already deleted'
      });
    }

    res.json({
      message: "Project deleted successfully",
      deletedCount: result.deletedCount
    });

  } catch (error) {
    console.error('Delete error: ', error);
    res.status(500).json({
      message: 'Error deleting project',
      error: error.message
    });
  }
});

// SEND FREIND REQEUST
app.post('/sendFriendRequest', async (req, res) => {
  try {
    const { senderUsername, receiverEmail } = req.body;

    if (!senderUsername || !receiverEmail) {
      return res.status(400).json({ message: 'Sender username and receiver email are required' });
    }

    const receiver = await DATABASE.collection('users').findOne({ email: receiverEmail });

    if (!receiver) {
      return res.status(404).json({ message: 'User not found' });
    }

    const existingRequest = receiver.friendRequests?.find(
      request => request.senderUsername === senderUsername
    );

    if (existingRequest) {
      return res.status(400).json({ message: 'Friend request already sent' });
    }

    const existingFriend = receiver.friends?.find(
      friend => friend.username === senderUsername
    );

    if (existingFriend) {
      return res.status(400).json({ message: 'You are already friends with this user' });
    }

    const result = await DATABASE.collection('users').updateOne(
      { email: receiverEmail },
      {
        $push: {
          friendRequests: senderUsername
        }
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(500).json({ message: 'Failed to send friend request' });
    }

    res.json({
      message: 'Friend request sent successfully',
      receiver: receiver.name
    });

  } catch (error) {
    console.error('Error sending friend request:', error);
    res.status(500).json({
      message: 'Error sending friend request',
      error: error.message
    });
  }
});


// ACCEPT FRIEND REQUEST
app.post('/acceptFriendRequest', async (req, res) => {
  try {
    const { userEmail, requesterEmail } = req.body;

    if (!userEmail || !requesterEmail) {
      return res.status(400).json({ message: 'User email and requester email are required' });
    }

    const user = await DATABASE.collection('users').findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const requester = await DATABASE.collection('users').findOne({ email: requesterEmail });
    if (!requester) {
      return res.status(404).json({ message: 'Requester not found' });
    }

    if (!user.friendRequests || !user.friendRequests.includes(requesterEmail)) {
      return res.status(400).json({ message: 'Friend request not found' });
    }

    const alreadyFriends = user.friends?.some(friend => friend.username === requesterEmail);
    if (alreadyFriends) {
      return res.status(400).json({ message: 'Already friends with this user' });
    }

    const session = DATABASE.client.startSession();

    try {
      await session.withTransaction(async () => {

        await DATABASE.collection(usersCollection).updateOne(
          { email: userEmail },
          {
            $pull: { friendRequests: requesterEmail },
            $push: {
              friends: {
                username: requesterEmail,
                image: requester.profileImage,
              }
            }
          },
          { session }
        );


        await DATABASE.collection(usersCollection).updateOne(
          { email: requesterEmail },
          {
            $push: {
              friends: {
                username: userEmail,
                image: user.profileImage,
              }
            }
          },
          { session }
        );
      });
    } finally {
      await session.endSession();
    }

    res.json({
      message: 'Friend request accepted successfully',
      newFriend: {
        username: requesterEmail,
        image: requester.profileImage,
      }
    });

  } catch (error) {
    console.error('Error accepting friend request:', error);
    res.status(500).json({
      message: 'Error accepting friend request',
      error: error.message
    });
  }
});

// DRY: DON'T REPEAT YOURSELF BUDDY
const findOneProject = async (email, projectName) => {

  const Project = await DATABASE.collection(projectsCollection).findOne({
    email: email,
    projectName: projectName
  });

  return Project;
}

const findManyProject = async (email) => {

  const Projects = await DATABASE.collection(projectsCollection).find({
    email: email,
  }).toArray();
  // console.log("DRY: DON'T REPEAT YOURSELF BUDDY");

  return Projects;
}

app.get('/{*any}', (req, res) => {
  res.sendFile(path.resolve('FrontEnd/public', 'index.html'))
})

async function startServer() {
  try {
    await connectToMongo();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (error) {

    console.error('Failed to start server:', error);

  }
}

startServer();