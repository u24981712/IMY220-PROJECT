"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["confirmpassword"],
  _excluded2 = ["_id"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var multer = require("multer");
var path = require("path");
var fs = require("fs");
var cors = require("cors");
var app = express();
var PORT = 8000;
var _require = require("mongodb"),
  MongoClient = _require.MongoClient,
  ObjectId = _require.ObjectId;

// SETTING UP MULTER FOR IMAGE UPLOADING
var storage = multer.memoryStorage();
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1024 * 1024
  },
  fileFilter: function fileFilter(req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  }
});

// Mongo
var USER = "test-user";
var PASSWORD = "test-password";
var MONGO_URI = "mongodb+srv://".concat(USER, ":").concat(PASSWORD, "@imy220.viyovyv.mongodb.net/MY220");
var DB_NAME = "codexDB";
var CLIENT;
var DATABASE;
var usersCollection = "users";
var testimonialsCollection = "testimonials";
var projectsCollection = "projects";
function connectToMongo() {
  return _connectToMongo.apply(this, arguments);
} // MIDDLEWARE
function _connectToMongo() {
  _connectToMongo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26() {
    var _t24;
    return _regenerator().w(function (_context26) {
      while (1) switch (_context26.p = _context26.n) {
        case 0:
          _context26.p = 0;
          CLIENT = new MongoClient(MONGO_URI);
          _context26.n = 1;
          return CLIENT.connect();
        case 1:
          DATABASE = CLIENT.db(DB_NAME);
          console.log("Connected to MongoDB successfully");
          _context26.n = 3;
          break;
        case 2:
          _context26.p = 2;
          _t24 = _context26.v;
          console.error("Error connecting to MongoDB:", _t24);
          throw _t24;
        case 3:
          return _context26.a(2);
      }
    }, _callee26, null, [[0, 2]]);
  }));
  return _connectToMongo.apply(this, arguments);
}
app.use(express["static"]("FrontEnd/public"));
app.use(cors());
app.use(express.json());
app.get("/api", function (req, res) {
  res.json({
    message: "Bruhhh"
  });
});
var uploadFile = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024
  }
});
app.post("/uploadBanner/:projectName", upload.single("banner"), /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(req, res) {
    var projectName, email, base64Image, result, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          if (req.file) {
            _context.n = 1;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: "No image file provided"
          }));
        case 1:
          if (!(req.file.size > 1 * 1024 * 1024)) {
            _context.n = 2;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: "File too large. Max 1MB allowed."
          }));
        case 2:
          projectName = req.params.projectName;
          email = req.body.email;
          base64Image = req.file.buffer.toString("base64");
          _context.n = 3;
          return DATABASE.collection(projectsCollection).updateOne({
            projectName: projectName,
            email: email
          }, {
            $set: {
              banner: {
                imageBase64: base64Image,
                contentType: req.file.mimetype,
                fileSize: req.file.size,
                originalName: req.file.originalname
              }
            }
          });
        case 3:
          result = _context.v;
          if (!(result.modifiedCount === 0)) {
            _context.n = 4;
            break;
          }
          return _context.a(2, res.status(404).json({
            error: "Project not found"
          }));
        case 4:
          res.json({
            message: "Banner uploaded successfully",
            banner: {
              contentType: req.file.mimetype,
              fileSize: req.file.size
            }
          });
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error("Upload error:", _t);
          res.status(500).json({
            error: "Upload failed"
          });
        case 6:
          return _context.a(2);
      }
    }, _callee, null, [[0, 5]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

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

app.post("/uploadFile/:projectName", uploadFile.array("files", 10),
/*#__PURE__*/
// Allow up to 10 files at once
function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var projectName, email, checkInMessage, date, dateOnly, newFiles, fileNames, newMessage, result, project, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          if (!(!req.files || req.files.length === 0)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.status(400).json({
            error: "No files provided"
          }));
        case 1:
          projectName = decodeURIComponent(req.params.projectName);
          email = req.body.email;
          checkInMessage = req.body.checkInMessage || "No message provided";
          date = new Date().toISOString();
          dateOnly = date.split("T")[0]; // Prepare all files
          newFiles = req.files.map(function (file) {
            return {
              fileName: file.originalname,
              fileType: file.mimetype,
              fileSize: file.size,
              content: file.buffer.toString("base64"),
              uploadedAt: dateOnly
            };
          }); // Create ONE message for the entire upload with all file names
          fileNames = req.files.map(function (file) {
            return file.originalname;
          }).join(", ");
          newMessage = {
            message: checkInMessage,
            date: dateOnly,
            fileName: fileNames,
            // All files in one string
            uploadedBy: email,
            timestamp: dateOnly,
            fileCount: req.files.length // Optional: track how many files
          }; // Update project with all files and ONE message
          _context2.n = 2;
          return DATABASE.collection(projectsCollection).updateOne({
            projectName: projectName,
            email: email
          }, {
            $push: {
              files: {
                $each: newFiles
              },
              messages: newMessage // Just one message, no $each
            }
          });
        case 2:
          result = _context2.v;
          if (!(result.modifiedCount === 0)) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, res.status(404).json({
            error: "Project not found"
          }));
        case 3:
          _context2.n = 4;
          return DATABASE.collection(projectsCollection).findOne({
            projectName: projectName,
            email: email
          });
        case 4:
          project = _context2.v;
          res.json({
            message: "".concat(req.files.length, " file(s) uploaded successfully"),
            project: project,
            filesUploaded: req.files.length
          });
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          console.error("Upload error:", _t2);
          res.status(500).json({
            error: "Upload failed"
          });
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 5]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.post("/uploadProfileImage", uploadFile.single("file"), /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var email, base64File, dataUrl, result, user, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          if (req.file) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, res.status(400).json({
            error: "No file provided"
          }));
        case 1:
          if (req.file.mimetype.startsWith("image/")) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2, res.status(400).json({
            error: "Only image files are allowed"
          }));
        case 2:
          email = req.body.email;
          base64File = req.file.buffer.toString("base64");
          dataUrl = "data:".concat(req.file.mimetype, ";base64,").concat(base64File);
          _context3.n = 3;
          return DATABASE.collection(usersCollection).updateOne({
            email: email
          }, {
            $set: {
              profileImage: dataUrl
            }
          });
        case 3:
          result = _context3.v;
          if (!(result.modifiedCount === 0)) {
            _context3.n = 4;
            break;
          }
          return _context3.a(2, res.status(404).json({
            error: "User not found"
          }));
        case 4:
          _context3.n = 5;
          return DATABASE.collection(usersCollection).findOne({
            email: email
          }, {
            projection: {
              password: 0
            }
          });
        case 5:
          user = _context3.v;
          res.json({
            message: "Profile image updated successfully",
            user: user
          });
          _context3.n = 7;
          break;
        case 6:
          _context3.p = 6;
          _t3 = _context3.v;
          console.error("Upload error:", _t3);
          res.status(500).json({
            error: "Upload failed"
          });
        case 7:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.get("/downloadFile/:projectName/:fileName", /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var _req$params, projectName, fileName, email, project, file, fileBuffer, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          _req$params = req.params, projectName = _req$params.projectName, fileName = _req$params.fileName;
          email = req.query.email;
          _context4.n = 1;
          return DATABASE.collection("projects").findOne({
            projectName: projectName,
            email: email
          });
        case 1:
          project = _context4.v;
          if (project) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, res.status(404).json({
            message: "Project not found"
          }));
        case 2:
          file = project.files.find(function (f) {
            return f.fileName === fileName;
          });
          if (file) {
            _context4.n = 3;
            break;
          }
          return _context4.a(2, res.status(404).json({
            message: "File not found"
          }));
        case 3:
          fileBuffer = Buffer.from(file.content, "base64");
          res.setHeader("Content-Type", "application/octet-stream");
          res.setHeader("Content-Disposition", "attachment; filename=\"".concat(fileName, "\""));
          res.send(fileBuffer);
          _context4.n = 5;
          break;
        case 4:
          _context4.p = 4;
          _t4 = _context4.v;
          console.error("Download error:", _t4);
          res.status(500).json({
            message: "Error downloading file"
          });
        case 5:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 4]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app.post("/deleteFile", /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var _req$body, projectName, fileName, email, result, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _req$body = req.body, projectName = _req$body.projectName, fileName = _req$body.fileName, email = _req$body.email;
          if (!(!projectName || !fileName || !email)) {
            _context5.n = 1;
            break;
          }
          return _context5.a(2, res.status(400).json({
            message: "Project name, file name, and email are required"
          }));
        case 1:
          _context5.n = 2;
          return DATABASE.collection(projectsCollection).updateOne({
            projectName: projectName,
            email: email
          }, {
            $pull: {
              files: {
                fileName: fileName
              }
            }
          });
        case 2:
          result = _context5.v;
          if (!(result.modifiedCount === 0)) {
            _context5.n = 3;
            break;
          }
          return _context5.a(2, res.status(404).json({
            message: "File or project not found"
          }));
        case 3:
          res.json({
            message: "File deleted successfully",
            deletedFile: fileName
          });
          _context5.n = 5;
          break;
        case 4:
          _context5.p = 4;
          _t5 = _context5.v;
          console.error("Delete file error:", _t5);
          res.status(500).json({
            message: "Error deleting file",
            error: _t5.message
          });
        case 5:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 4]]);
  }));
  return function (_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}());
app.post("/AddCollaborator", /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var _req$body2, projectName, ownerEmail, friendEmail, result, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _req$body2 = req.body, projectName = _req$body2.projectName, ownerEmail = _req$body2.ownerEmail, friendEmail = _req$body2.friendEmail;
          if (!(!projectName || !ownerEmail || !friendEmail)) {
            _context6.n = 1;
            break;
          }
          return _context6.a(2, res.status(400).json({
            message: "Project name, owner email, and friend email are required"
          }));
        case 1:
          _context6.n = 2;
          return DATABASE.collection(projectsCollection).updateOne({
            projectName: projectName,
            email: ownerEmail
          }, {
            $push: {
              collaborators: friendEmail
            }
          });
        case 2:
          result = _context6.v;
          if (!(result.modifiedCount === 0)) {
            _context6.n = 3;
            break;
          }
          return _context6.a(2, res.status(404).json({
            message: "Project not found or you're not the owner"
          }));
        case 3:
          res.json({
            message: "Collaborator added successfully",
            addedCollaborator: friendEmail
          });
          _context6.n = 5;
          break;
        case 4:
          _context6.p = 4;
          _t6 = _context6.v;
          console.error("Add collaborator error:", _t6);
          res.status(500).json({
            message: "Error adding collaborator",
            error: _t6.message
          });
        case 5:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 4]]);
  }));
  return function (_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}());
app.post("/RemoveCollaborator", /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var _req$body3, projectName, ownerEmail, friendEmail, result, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          _req$body3 = req.body, projectName = _req$body3.projectName, ownerEmail = _req$body3.ownerEmail, friendEmail = _req$body3.friendEmail;
          if (!(!projectName || !ownerEmail || !friendEmail)) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2, res.status(400).json({
            message: "Project name, owner email, and friend email are required"
          }));
        case 1:
          if (!(friendEmail === ownerEmail)) {
            _context7.n = 2;
            break;
          }
          return _context7.a(2, res.status(400).json({
            message: "Cannot remove the project owner from collaborators"
          }));
        case 2:
          _context7.n = 3;
          return DATABASE.collection(projectsCollection).updateOne({
            projectName: projectName,
            email: ownerEmail
          }, {
            $pull: {
              collaborators: friendEmail
            }
          });
        case 3:
          result = _context7.v;
          if (!(result.modifiedCount === 0)) {
            _context7.n = 4;
            break;
          }
          return _context7.a(2, res.status(404).json({
            message: "Project not found, you're not the owner, or collaborator not found"
          }));
        case 4:
          res.json({
            message: "Collaborator removed successfully",
            removedCollaborator: friendEmail
          });
          _context7.n = 6;
          break;
        case 5:
          _context7.p = 5;
          _t7 = _context7.v;
          console.error("Remove collaborator error:", _t7);
          res.status(500).json({
            message: "Error removing collaborator",
            error: _t7.message
          });
        case 6:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 5]]);
  }));
  return function (_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}());

/**************************************************************************/
// PROJECT BASED ENDPOINTS
/**************************************************************************/

app.get("/getProjects", /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var projects, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return DATABASE.collection(projectsCollection).find().toArray();
        case 1:
          projects = _context8.v;
          if (projects.length === 0) {
            // console.log("No projects found");

            res.json({
              message: "No projects found"
            });
          } else {
            res.status(200).json(projects);
          }
          _context8.n = 3;
          break;
        case 2:
          _context8.p = 2;
          _t8 = _context8.v;
          console.error("Error reading Users.json:", _t8);
          res.status(500).json({
            error: "Failed to retreive projects"
          });
        case 3:
          return _context8.a(2);
      }
    }, _callee8, null, [[0, 2]]);
  }));
  return function (_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}());
app.get("/getProject/:projectName", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var projectName, email, project, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          projectName = req.params.projectName;
          email = req.query.email;
          _context9.n = 1;
          return findOneProject(email, projectName);
        case 1:
          project = _context9.v;
          if (project) {
            res.status(200).json(project);
          } else {
            res.json({
              message: "Project not found"
            });
          }
          _context9.n = 3;
          break;
        case 2:
          _context9.p = 2;
          _t9 = _context9.v;
          console.error("Error: ", _t9);
          res.status(500).json({
            error: "Failed to retreive project"
          });
        case 3:
          return _context9.a(2);
      }
    }, _callee9, null, [[0, 2]]);
  }));
  return function (_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}());
app.get("/getProjects/:email", /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var email, projects, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          email = req.params.email;
          _context0.n = 1;
          return findManyProject(email);
        case 1:
          projects = _context0.v;
          if (projects && projects.length > 0) {
            // console.log(`Found ${projects.length} projects for ${email}`);

            res.status(200).json(projects);
          } else {
            res.json({
              message: "Projects not found for this user"
            });
          }
          _context0.n = 3;
          break;
        case 2:
          _context0.p = 2;
          _t0 = _context0.v;
          console.error("Error: ", _t0);
          res.status(500).json({
            error: "Failed to retreive project"
          });
        case 3:
          return _context0.a(2);
      }
    }, _callee0, null, [[0, 2]]);
  }));
  return function (_x17, _x18) {
    return _ref0.apply(this, arguments);
  };
}());
app.post("/newProject", /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
    var _req$body4, projectName, email, existingProject, date, dateOnly, projectData, result, _t1;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          // FIRST CHECK IF A PROJECT WITH THE SAME NAME BY THE SAME USER EXISTS
          _req$body4 = req.body, projectName = _req$body4.projectName, email = _req$body4.email; // const existingProject = await DATABASE.collection(projectsCollection).findOne({
          //   email: email,
          //   projectName: projectName
          // });
          _context1.n = 1;
          return findOneProject(email, projectName);
        case 1:
          existingProject = _context1.v;
          if (!existingProject) {
            _context1.n = 2;
            break;
          }
          return _context1.a(2, res.json({
            message: "Project name already exists"
          }));
        case 2:
          date = new Date().toISOString();
          dateOnly = date.split("T")[0]; // ONLY INSERT THE DOCUMENT IF SIMILAR NAME DOESN'T EXIST
          projectData = _objectSpread(_objectSpread({}, req.body), {}, {
            dateCreated: dateOnly
          });
          _context1.n = 3;
          return DATABASE.collection(projectsCollection).insertOne(projectData);
        case 3:
          result = _context1.v;
          res.json({
            message: "Project saved successfully",
            projectId: result.insertedId
          });
          _context1.n = 5;
          break;
        case 4:
          _context1.p = 4;
          _t1 = _context1.v;
          console.error("Error: ", _t1);
          res.status(500).json({
            message: "Error saving project"
          });
        case 5:
          return _context1.a(2);
      }
    }, _callee1, null, [[0, 4]]);
  }));
  return function (_x19, _x20) {
    return _ref1.apply(this, arguments);
  };
}());
/***************************************************************************/
// DELETE PROJECT
/***************************************************************************/

app.post("/deleteProject", /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(req, res) {
    var _req$body5, projectName, email, result, _t10;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          _context10.p = 0;
          _req$body5 = req.body, projectName = _req$body5.projectName, email = _req$body5.email; // if (!projectName || !email) {
          //   return res.status(400).json({ message: 'Project name and email are required' });
          // }
          _context10.n = 1;
          return DATABASE.collection(projectsCollection).deleteOne({
            projectName: projectName,
            email: email
          });
        case 1:
          result = _context10.v;
          if (!(result.deletedCount === 0)) {
            _context10.n = 2;
            break;
          }
          return _context10.a(2, res.status(404).json({
            message: "Project not found or already deleted"
          }));
        case 2:
          res.json({
            message: "Project deleted successfully",
            deletedCount: result.deletedCount
          });
          _context10.n = 4;
          break;
        case 3:
          _context10.p = 3;
          _t10 = _context10.v;
          console.error("Delete error: ", _t10);
          res.status(500).json({
            message: "Error deleting project",
            error: _t10.message
          });
        case 4:
          return _context10.a(2);
      }
    }, _callee10, null, [[0, 3]]);
  }));
  return function (_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}());

/***************************************************************************/
// USER RELATED ENDPOINTS
/***************************************************************************/

app.get("/getUsers", /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(req, res) {
    var users, _t11;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          _context11.n = 1;
          return DATABASE.collection(usersCollection).find().toArray();
        case 1:
          users = _context11.v;
          if (users.length === 0) {
            console.log("No projects found");
            res.json({
              message: "No users found"
            });
          } else {
            res.status(200).json(users);
          }
          _context11.n = 3;
          break;
        case 2:
          _context11.p = 2;
          _t11 = _context11.v;
          console.error("Error reading Users.json:", _t11);
          res.status(500).json({
            error: "Failed to retreive projects"
          });
        case 3:
          return _context11.a(2);
      }
    }, _callee11, null, [[0, 2]]);
  }));
  return function (_x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}());
app.get("/getUser/:email", /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(req, res) {
    var email, user, _t12;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          _context12.p = 0;
          email = req.params.email;
          if (!(!email || email === "undefined")) {
            _context12.n = 1;
            break;
          }
          return _context12.a(2, res.status(400).json({
            error: "Invalid email parameter"
          }));
        case 1:
          _context12.n = 2;
          return DATABASE.collection(usersCollection).findOne({
            email: email
          });
        case 2:
          user = _context12.v;
          if (user) {
            _context12.n = 3;
            break;
          }
          console.log("User not found");
          return _context12.a(2, res.status(404).json({
            message: "User not found"
          }));
        case 3:
          res.status(200).json(user);
          _context12.n = 5;
          break;
        case 4:
          _context12.p = 4;
          _t12 = _context12.v;
          console.error("Error fetching user:", _t12);
          res.status(500).json({
            error: "Failed to retrieve user"
          });
        case 5:
          return _context12.a(2);
      }
    }, _callee12, null, [[0, 4]]);
  }));
  return function (_x25, _x26) {
    return _ref12.apply(this, arguments);
  };
}());
app.get("/getTestimonials", /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(req, res) {
    var testimonials, _t13;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.p = _context13.n) {
        case 0:
          _context13.p = 0;
          _context13.n = 1;
          return DATABASE.collection(testimonialsCollection).find().toArray();
        case 1:
          testimonials = _context13.v;
          if (testimonials) {
            // console.log(testimonials);
          }
          res.json(testimonials);
          _context13.n = 3;
          break;
        case 2:
          _context13.p = 2;
          _t13 = _context13.v;
          res.status(404).json({
            message: "Failed to retreive testimonial data"
          });
        case 3:
          return _context13.a(2);
      }
    }, _callee13, null, [[0, 2]]);
  }));
  return function (_x27, _x28) {
    return _ref13.apply(this, arguments);
  };
}());
app.post("/signup", /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(req, res) {
    var newUser, email, user, confirmpassword, userToSave, _t14;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.p = _context14.n) {
        case 0:
          _context14.p = 0;
          newUser = req.body;
          email = newUser.email;
          _context14.n = 1;
          return DATABASE.collection(usersCollection).findOne({
            email: email
          });
        case 1:
          user = _context14.v;
          if (!user) {
            _context14.n = 2;
            break;
          }
          console.log("User already exist");
          res.status(400).json({
            message: "User already exist"
          });
          _context14.n = 4;
          break;
        case 2:
          confirmpassword = newUser.confirmpassword, userToSave = _objectWithoutProperties(newUser, _excluded);
          _context14.n = 3;
          return DATABASE.collection(usersCollection).insertOne(userToSave);
        case 3:
          res.status(201).json({
            message: "User created successfully",
            user: userToSave
          });
        case 4:
          _context14.n = 6;
          break;
        case 5:
          _context14.p = 5;
          _t14 = _context14.v;
          console.error("Error creating user:", _t14);
          res.status(500).json({
            error: "Failed to create user"
          });
        case 6:
          return _context14.a(2);
      }
    }, _callee14, null, [[0, 5]]);
  }));
  return function (_x29, _x30) {
    return _ref14.apply(this, arguments);
  };
}());
app.get("/getEmails", /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(req, res) {
    var users, _t15;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.p = _context15.n) {
        case 0:
          _context15.p = 0;
          _context15.n = 1;
          return DATABASE.collection(usersCollection).find({}, {
            projection: {
              email: 1
            }
          }).toArray();
        case 1:
          users = _context15.v;
          if (users.length === 0) {
            console.log("No users found");
            res.json({
              error: "No users found"
            });
          } else {
            res.status(200).json(users);
          }
          _context15.n = 3;
          break;
        case 2:
          _context15.p = 2;
          _t15 = _context15.v;
          res.status(500).json({
            error: "Failed to retreive users"
          });
        case 3:
          return _context15.a(2);
      }
    }, _callee15, null, [[0, 2]]);
  }));
  return function (_x31, _x32) {
    return _ref15.apply(this, arguments);
  };
}());

// SEND FREIND REQEUST
app.post("/sendFriendRequest", /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(req, res) {
    var _req$body6, email, receiverEmail, receiver, sender, friendRequests, followers, result, _t16;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          _context16.p = 0;
          _req$body6 = req.body, email = _req$body6.email, receiverEmail = _req$body6.receiverEmail;
          if (!(!email || !receiverEmail)) {
            _context16.n = 1;
            break;
          }
          return _context16.a(2, res.status(400).json({
            message: "Sender username and receiver email are required"
          }));
        case 1:
          _context16.n = 2;
          return DATABASE.collection(usersCollection).findOne({
            email: receiverEmail
          });
        case 2:
          receiver = _context16.v;
          if (receiver) {
            _context16.n = 3;
            break;
          }
          return _context16.a(2, res.status(404).json({
            message: "User not found"
          }));
        case 3:
          _context16.n = 4;
          return DATABASE.collection(usersCollection).findOne({
            email: email
          });
        case 4:
          sender = _context16.v;
          if (sender) {
            _context16.n = 5;
            break;
          }
          return _context16.a(2, res.status(404).json({
            message: "Sender not found"
          }));
        case 5:
          console.log(receiver.friendRequests);
          friendRequests = receiver.friendRequests || [];
          followers = receiver.followers || [];
          if (!friendRequests.includes(email)) {
            _context16.n = 6;
            break;
          }
          return _context16.a(2, res.json({
            message: "Friend request already sent"
          }));
        case 6:
          if (!followers.includes(email)) {
            _context16.n = 7;
            break;
          }
          return _context16.a(2, res.json({
            message: "This user is already following you"
          }));
        case 7:
          _context16.n = 8;
          return DATABASE.collection("users").updateOne({
            email: receiverEmail
          }, {
            $push: {
              friendRequests: email
            }
          });
        case 8:
          result = _context16.v;
          if (!(result.modifiedCount === 0)) {
            _context16.n = 9;
            break;
          }
          return _context16.a(2, res.status(500).json({
            message: "Failed to send friend request"
          }));
        case 9:
          res.json({
            message: "Friend request sent successfully",
            receiver: receiver.name
          });
          _context16.n = 11;
          break;
        case 10:
          _context16.p = 10;
          _t16 = _context16.v;
          console.error("Error sending friend request:", _t16);
          res.status(500).json({
            message: "Error sending friend request",
            error: _t16.message
          });
        case 11:
          return _context16.a(2);
      }
    }, _callee16, null, [[0, 10]]);
  }));
  return function (_x33, _x34) {
    return _ref16.apply(this, arguments);
  };
}());

// ACCEPT FRIEND REQUEST
app.post("/acceptFriendRequest", /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(req, res) {
    var _req$body7, currentUserEmail, requesterEmail, user, requester, session, _t17;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.p = _context18.n) {
        case 0:
          _context18.p = 0;
          _req$body7 = req.body, currentUserEmail = _req$body7.currentUserEmail, requesterEmail = _req$body7.requesterEmail;
          if (!(!currentUserEmail || !requesterEmail)) {
            _context18.n = 1;
            break;
          }
          return _context18.a(2, res.status(400).json({
            message: "User email and requester email are required"
          }));
        case 1:
          _context18.n = 2;
          return DATABASE.collection(usersCollection).findOne({
            email: currentUserEmail
          });
        case 2:
          user = _context18.v;
          if (user) {
            _context18.n = 3;
            break;
          }
          return _context18.a(2, res.status(404).json({
            message: "User not found"
          }));
        case 3:
          _context18.n = 4;
          return DATABASE.collection(usersCollection).findOne({
            email: requesterEmail
          });
        case 4:
          requester = _context18.v;
          if (requester) {
            _context18.n = 5;
            break;
          }
          return _context18.a(2, res.status(404).json({
            message: "Requester not found"
          }));
        case 5:
          // const friendRequests = user.friendRequests || [];
          console.log(user.friendRequests.includes(requesterEmail));
          if (user.friendRequests.includes(requesterEmail)) {
            _context18.n = 6;
            break;
          }
          return _context18.a(2, res.status(400).json({
            message: "Friend request not found"
          }));
        case 6:
          // const followers = user.followers || [];

          console.log(user.followers.includes(requesterEmail));
          if (!user.followers.includes(requesterEmail)) {
            _context18.n = 7;
            break;
          }
          return _context18.a(2, res.status(400).json({
            message: "Already following this user"
          }));
        case 7:
          session = CLIENT.startSession();
          _context18.p = 8;
          _context18.n = 9;
          return session.withTransaction(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
            return _regenerator().w(function (_context17) {
              while (1) switch (_context17.n) {
                case 0:
                  _context17.n = 1;
                  return DATABASE.collection(usersCollection).updateOne({
                    email: currentUserEmail
                  }, {
                    $pull: {
                      friendRequests: requesterEmail
                    },
                    $addToSet: {
                      followers: requesterEmail
                    }
                  }, {
                    session: session
                  });
                case 1:
                  _context17.n = 2;
                  return DATABASE.collection(usersCollection).updateOne({
                    email: requesterEmail
                  }, {
                    $addToSet: {
                      following: currentUserEmail
                    }
                  }, {
                    session: session
                  });
                case 2:
                  return _context17.a(2);
              }
            }, _callee17);
          })));
        case 9:
          _context18.p = 9;
          _context18.n = 10;
          return session.endSession();
        case 10:
          return _context18.f(9);
        case 11:
          res.json({
            message: "Friend request accepted successfully",
            newFollower: {
              email: requesterEmail,
              name: requester.name,
              profileImage: requester.profileImage
            }
          });
          _context18.n = 13;
          break;
        case 12:
          _context18.p = 12;
          _t17 = _context18.v;
          console.error("Error accepting friend request:", _t17);
          res.status(500).json({
            message: "Error accepting friend request",
            error: _t17.message
          });
        case 13:
          return _context18.a(2);
      }
    }, _callee18, null, [[8,, 9, 11], [0, 12]]);
  }));
  return function (_x35, _x36) {
    return _ref17.apply(this, arguments);
  };
}());

// ACCEPT FRIEND REQUEST
app.post("/declineFriendRequest", /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(req, res) {
    var _req$body8, currentUserEmail, requesterEmail, user, friendRequests, result, _t18;
    return _regenerator().w(function (_context19) {
      while (1) switch (_context19.p = _context19.n) {
        case 0:
          _context19.p = 0;
          _req$body8 = req.body, currentUserEmail = _req$body8.currentUserEmail, requesterEmail = _req$body8.requesterEmail;
          if (!(!currentUserEmail || !requesterEmail)) {
            _context19.n = 1;
            break;
          }
          return _context19.a(2, res.status(400).json({
            message: "User email and requester email are required"
          }));
        case 1:
          _context19.n = 2;
          return DATABASE.collection(usersCollection).findOne({
            email: currentUserEmail
          });
        case 2:
          user = _context19.v;
          if (user) {
            _context19.n = 3;
            break;
          }
          return _context19.a(2, res.json({
            message: "User not found"
          }));
        case 3:
          friendRequests = user.friendRequests || [];
          if (friendRequests.includes(requesterEmail)) {
            _context19.n = 4;
            break;
          }
          return _context19.a(2, res.json({
            message: "Friend request not found"
          }));
        case 4:
          _context19.n = 5;
          return DATABASE.collection(usersCollection).updateOne({
            email: currentUserEmail
          }, {
            $pull: {
              friendRequests: requesterEmail
            }
          });
        case 5:
          result = _context19.v;
          if (!(result.modifiedCount === 0)) {
            _context19.n = 6;
            break;
          }
          return _context19.a(2, res.json({
            message: "Failed to decline friend request"
          }));
        case 6:
          res.json({
            message: "Friend request declined successfully",
            declinedRequest: requesterEmail
          });
          _context19.n = 8;
          break;
        case 7:
          _context19.p = 7;
          _t18 = _context19.v;
          console.error("Error declining friend request:", _t18);
          res.status(500).json({
            message: "Error declining friend request",
            error: _t18.message
          });
        case 8:
          return _context19.a(2);
      }
    }, _callee19, null, [[0, 7]]);
  }));
  return function (_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}());
app.put("/updateUser", /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(req, res) {
    var userData, email, _id, updateData, result, updatedUser, _t19;
    return _regenerator().w(function (_context20) {
      while (1) switch (_context20.p = _context20.n) {
        case 0:
          _context20.p = 0;
          userData = req.body;
          email = userData.email;
          if (email) {
            _context20.n = 1;
            break;
          }
          return _context20.a(2, res.status(400).json({
            error: "Email is required"
          }));
        case 1:
          _id = userData._id, updateData = _objectWithoutProperties(userData, _excluded2);
          _context20.n = 2;
          return DATABASE.collection(usersCollection).updateOne({
            email: email
          }, {
            $set: updateData
          });
        case 2:
          result = _context20.v;
          if (!(result.matchedCount === 0)) {
            _context20.n = 3;
            break;
          }
          return _context20.a(2, res.status(404).json({
            error: "User not found"
          }));
        case 3:
          _context20.n = 4;
          return DATABASE.collection(usersCollection).findOne({
            email: email
          });
        case 4:
          updatedUser = _context20.v;
          res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
          });
          _context20.n = 6;
          break;
        case 5:
          _context20.p = 5;
          _t19 = _context20.v;
          console.error("Error updating user:", _t19);
          res.status(500).json({
            error: "Failed to update user"
          });
        case 6:
          return _context20.a(2);
      }
    }, _callee20, null, [[0, 5]]);
  }));
  return function (_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}());
app["delete"]("/deleteProfile", /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(req, res) {
    var email, user, session, _t20, _t21, _t22;
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.p = _context22.n) {
        case 0:
          _context22.p = 0;
          email = req.body.email;
          if (email) {
            _context22.n = 1;
            break;
          }
          return _context22.a(2, res.status(400).json({
            message: "Email is required"
          }));
        case 1:
          _context22.n = 2;
          return DATABASE.collection(usersCollection).findOne({
            email: email
          });
        case 2:
          user = _context22.v;
          if (user) {
            _context22.n = 3;
            break;
          }
          return _context22.a(2, res.status(404).json({
            message: "User not found"
          }));
        case 3:
          session = CLIENT.startSession();
          _context22.p = 4;
          _context22.n = 5;
          return session.withTransaction(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
            var projectsResult, userResult;
            return _regenerator().w(function (_context21) {
              while (1) switch (_context21.n) {
                case 0:
                  _context21.n = 1;
                  return DATABASE.collection(projectsCollection).deleteMany({
                    email: email
                  }, {
                    session: session
                  });
                case 1:
                  projectsResult = _context21.v;
                  _context21.n = 2;
                  return DATABASE.collection(usersCollection).updateMany({
                    $or: [{
                      followers: email
                    }, {
                      following: email
                    }, {
                      friendRequests: email
                    }]
                  }, {
                    $pull: {
                      followers: email,
                      following: email,
                      friendRequests: email
                    }
                  }, {
                    session: session
                  });
                case 2:
                  _context21.n = 3;
                  return DATABASE.collection(usersCollection).deleteOne({
                    email: email
                  }, {
                    session: session
                  });
                case 3:
                  userResult = _context21.v;
                  if (!(userResult.deletedCount === 0)) {
                    _context21.n = 4;
                    break;
                  }
                  throw new Error("Failed to delete user");
                case 4:
                  return _context21.a(2);
              }
            }, _callee21);
          })));
        case 5:
          _t20 = res;
          _context22.n = 6;
          return DATABASE.collection(projectsCollection).countDocuments({
            email: email
          });
        case 6:
          _t21 = _context22.v;
          _t20.json.call(_t20, {
            message: "Profile and all associated data deleted successfully",
            projectsDeleted: _t21
          });
        case 7:
          _context22.p = 7;
          _context22.n = 8;
          return session.endSession();
        case 8:
          return _context22.f(7);
        case 9:
          _context22.n = 11;
          break;
        case 10:
          _context22.p = 10;
          _t22 = _context22.v;
          console.error("Error deleting profile:", _t22);
          res.status(500).json({
            message: "Error deleting profile",
            error: _t22.message
          });
        case 11:
          return _context22.a(2);
      }
    }, _callee22, null, [[4,, 7, 9], [0, 10]]);
  }));
  return function (_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}());

/**************************************************************************************/
// TESTIMONIAL ENDPOINT
/**************************************************************************************/

app.get("/getProfileImages", /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(req, res) {
    var profileImages, _t23;
    return _regenerator().w(function (_context23) {
      while (1) switch (_context23.p = _context23.n) {
        case 0:
          _context23.p = 0;
          _context23.n = 1;
          return DATABASE.collection("profileImages").find({}, {
            projection: {
              _id: 0
            }
          }).toArray();
        case 1:
          profileImages = _context23.v;
          if (profileImages.length === 0) {
            console.log("No profile images found");
            res.json({
              error: "No profile images found"
            });
          } else {
            res.status(200).json(profileImages);
          }
          _context23.n = 3;
          break;
        case 2:
          _context23.p = 2;
          _t23 = _context23.v;
          res.status(500).json({
            error: "Failed to retreive users"
          });
        case 3:
          return _context23.a(2);
      }
    }, _callee23, null, [[0, 2]]);
  }));
  return function (_x43, _x44) {
    return _ref23.apply(this, arguments);
  };
}());

// DRY: DON'T REPEAT YOURSELF BUDDY
var findOneProject = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(email, projectName) {
    var Project;
    return _regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          _context24.n = 1;
          return DATABASE.collection(projectsCollection).findOne({
            email: email,
            projectName: projectName
          });
        case 1:
          Project = _context24.v;
          return _context24.a(2, Project);
      }
    }, _callee24);
  }));
  return function findOneProject(_x45, _x46) {
    return _ref24.apply(this, arguments);
  };
}();
var findManyProject = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(email) {
    var Projects;
    return _regenerator().w(function (_context25) {
      while (1) switch (_context25.n) {
        case 0:
          _context25.n = 1;
          return DATABASE.collection(projectsCollection).find({
            email: email
          }).toArray();
        case 1:
          Projects = _context25.v;
          return _context25.a(2, Projects);
      }
    }, _callee25);
  }));
  return function findManyProject(_x47) {
    return _ref25.apply(this, arguments);
  };
}();
app.get("/{*any}", function (req, res) {
  res.sendFile(path.resolve("FrontEnd/public", "index.html"));
});
function startServer() {
  return _startServer.apply(this, arguments);
}
function _startServer() {
  _startServer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27() {
    var _t25;
    return _regenerator().w(function (_context27) {
      while (1) switch (_context27.p = _context27.n) {
        case 0:
          _context27.p = 0;
          _context27.n = 1;
          return connectToMongo();
        case 1:
          app.listen(PORT, function () {
            console.log("Server running on http://localhost:".concat(PORT));
          });
          _context27.n = 3;
          break;
        case 2:
          _context27.p = 2;
          _t25 = _context27.v;
          console.error("Failed to start server:", _t25);
        case 3:
          return _context27.a(2);
      }
    }, _callee27, null, [[0, 2]]);
  }));
  return _startServer.apply(this, arguments);
}
startServer();