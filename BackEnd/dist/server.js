"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["confirmpassword"];
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var express = require("express");
var multer = require('multer');
var path = require("path");
var fs = require("fs");
var cors = require("cors");
var app = express();
var PORT = 8000;
var _require = require('mongodb'),
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
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Mongo 
var USER = "test-user";
var PASSWORD = "test-password";
var MONGO_URI = "mongodb+srv://".concat(USER, ":").concat(PASSWORD, "@imy220.viyovyv.mongodb.net/MY220");
var DB_NAME = 'codexDB';
var CLIENT;
var DATABASE;
var usersCollection = "users";
var testimonialsCollection = "testimonials";
var projectsCollection = "projects";
function connectToMongo() {
  return _connectToMongo.apply(this, arguments);
} // MIDDLEWARE
function _connectToMongo() {
  _connectToMongo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
    var _t15;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.p = _context17.n) {
        case 0:
          _context17.p = 0;
          CLIENT = new MongoClient(MONGO_URI);
          _context17.n = 1;
          return CLIENT.connect();
        case 1:
          DATABASE = CLIENT.db(DB_NAME);
          console.log('Connected to MongoDB successfully');
          _context17.n = 3;
          break;
        case 2:
          _context17.p = 2;
          _t15 = _context17.v;
          console.error('Error connecting to MongoDB:', _t15);
          throw _t15;
        case 3:
          return _context17.a(2);
      }
    }, _callee17, null, [[0, 2]]);
  }));
  return _connectToMongo.apply(this, arguments);
}
app.use(express["static"]("FrontEnd/public"));
app.use(cors());
app.use(express.json());
app.get('/api', function (req, res) {
  res.json({
    message: "Bruhhh"
  });
});
app.post('/uploadBanner/:projectName', upload.single('banner'), /*#__PURE__*/function () {
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
            error: 'No image file provided'
          }));
        case 1:
          if (!(req.file.size > 1 * 1024 * 1024)) {
            _context.n = 2;
            break;
          }
          return _context.a(2, res.status(400).json({
            error: 'File too large. Max 1MB allowed.'
          }));
        case 2:
          projectName = req.params.projectName;
          email = req.body.email;
          base64Image = req.file.buffer.toString('base64');
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
            error: 'Project not found'
          }));
        case 4:
          res.json({
            message: 'Banner uploaded successfully',
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
          console.error('Upload error:', _t);
          res.status(500).json({
            error: 'Upload failed'
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
var uploadFile = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit for code files
  }
});
app.post('/uploadFile/:projectName', uploadFile.single('file'), /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(req, res) {
    var projectName, email, fileName, base64File, result, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          if (req.file) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, res.status(400).json({
            error: 'No file provided'
          }));
        case 1:
          projectName = decodeURIComponent(req.params.projectName);
          email = req.body.email;
          fileName = req.body.fileName || req.file.originalname;
          base64File = req.file.buffer.toString('base64');
          _context2.n = 2;
          return DATABASE.collection(projectsCollection).updateOne({
            projectName: projectName,
            email: email
          }, {
            $push: {
              files: {
                fileName: fileName,
                fileType: req.file.mimetype,
                fileSize: req.file.size,
                content: base64File,
                uploadedAt: new Date()
              }
            }
          });
        case 2:
          result = _context2.v;
          if (!(result.modifiedCount === 0)) {
            _context2.n = 3;
            break;
          }
          return _context2.a(2, res.status(404).json({
            error: 'Project not found'
          }));
        case 3:
          res.json({
            message: 'File uploaded successfully',
            file: {
              fileName: fileName,
              fileType: req.file.mimetype,
              fileSize: req.file.size
            }
          });
          _context2.n = 5;
          break;
        case 4:
          _context2.p = 4;
          _t2 = _context2.v;
          console.error('Upload error:', _t2);
          res.status(500).json({
            error: 'Upload failed'
          });
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 4]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/************************************************************************* */

app.get('/getProjects', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(req, res) {
    var projects, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return DATABASE.collection(projectsCollection).find().toArray();
        case 1:
          projects = _context3.v;
          if (projects.length === 0) {
            // console.log("No projects found");

            res.json({
              message: "No projects found"
            });
          } else {
            res.status(200).json(projects);
          }
          _context3.n = 3;
          break;
        case 2:
          _context3.p = 2;
          _t3 = _context3.v;
          console.error('Error reading Users.json:', _t3);
          res.status(500).json({
            error: 'Failed to retreive projects'
          });
        case 3:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.get('/getProject/:projectName', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(req, res) {
    var projectName, email, project, _t4;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          _context4.p = 0;
          projectName = req.params.projectName;
          email = req.query.email;
          _context4.n = 1;
          return findOneProject(email, projectName);
        case 1:
          project = _context4.v;
          if (project) {
            res.status(200).json(project);
          } else {
            res.json({
              message: "Project not found"
            });
          }
          _context4.n = 3;
          break;
        case 2:
          _context4.p = 2;
          _t4 = _context4.v;
          console.error('Error: ', _t4);
          res.status(500).json({
            error: 'Failed to retreive project'
          });
        case 3:
          return _context4.a(2);
      }
    }, _callee4, null, [[0, 2]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app.get('/getProjects/:email', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(req, res) {
    var email, projects, _t5;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          email = req.params.email;
          _context5.n = 1;
          return findManyProject(email);
        case 1:
          projects = _context5.v;
          if (projects && projects.length > 0) {
            // console.log(`Found ${projects.length} projects for ${email}`);

            res.status(200).json(projects);
          } else {
            res.json({
              message: "Projects not found for this user"
            });
          }
          _context5.n = 3;
          break;
        case 2:
          _context5.p = 2;
          _t5 = _context5.v;
          console.error('Error: ', _t5);
          res.status(500).json({
            error: 'Failed to retreive project'
          });
        case 3:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 2]]);
  }));
  return function (_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}());
app.get('/getUsers', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(req, res) {
    var users, _t6;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return DATABASE.collection(usersCollection).find().toArray();
        case 1:
          users = _context6.v;
          if (users.length === 0) {
            console.log("No projects found");
            res.json({
              message: "No users found"
            });
          } else {
            res.status(200).json(users);
          }
          _context6.n = 3;
          break;
        case 2:
          _context6.p = 2;
          _t6 = _context6.v;
          console.error('Error reading Users.json:', _t6);
          res.status(500).json({
            error: 'Failed to retreive projects'
          });
        case 3:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 2]]);
  }));
  return function (_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}());
app.get('/getUser/:email', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req, res) {
    var email, user, _t7;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _context7.p = 0;
          email = req.params.email;
          if (!(!email || email === 'undefined')) {
            _context7.n = 1;
            break;
          }
          return _context7.a(2, res.status(400).json({
            error: "Invalid email parameter"
          }));
        case 1:
          _context7.n = 2;
          return DATABASE.collection(usersCollection).findOne({
            email: email
          });
        case 2:
          user = _context7.v;
          if (user) {
            _context7.n = 3;
            break;
          }
          console.log("User not found");
          return _context7.a(2, res.status(404).json({
            message: "User not found"
          }));
        case 3:
          res.status(200).json(user);
          _context7.n = 5;
          break;
        case 4:
          _context7.p = 4;
          _t7 = _context7.v;
          console.error('Error fetching user:', _t7);
          res.status(500).json({
            error: 'Failed to retrieve user'
          });
        case 5:
          return _context7.a(2);
      }
    }, _callee7, null, [[0, 4]]);
  }));
  return function (_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}());

/*********** TESTIMONIAL ENDPOINT ************/

app.get('/getTestimonials', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req, res) {
    var testimonials, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          _context8.p = 0;
          _context8.n = 1;
          return DATABASE.collection(testimonialsCollection).find().toArray();
        case 1:
          testimonials = _context8.v;
          if (testimonials) {
            // console.log(testimonials);
          }
          res.json(testimonials);
          _context8.n = 3;
          break;
        case 2:
          _context8.p = 2;
          _t8 = _context8.v;
          res.status(404).json({
            message: 'Failed to retreive testimonial data'
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
app.post("/signup", /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(req, res) {
    var newUser, email, user, confirmpassword, userToSave, _t9;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          _context9.p = 0;
          newUser = req.body;
          email = newUser.email;
          _context9.n = 1;
          return DATABASE.collection(usersCollection).findOne({
            email: email
          });
        case 1:
          user = _context9.v;
          if (!user) {
            _context9.n = 2;
            break;
          }
          console.log("User already exist");
          res.status(400).json({
            message: "User already exist"
          });
          _context9.n = 4;
          break;
        case 2:
          confirmpassword = newUser.confirmpassword, userToSave = _objectWithoutProperties(newUser, _excluded);
          _context9.n = 3;
          return DATABASE.collection(usersCollection).insertOne(userToSave);
        case 3:
          res.status(201).json({
            message: "User created successfully",
            user: userToSave
          });
        case 4:
          _context9.n = 6;
          break;
        case 5:
          _context9.p = 5;
          _t9 = _context9.v;
          console.error('Error creating user:', _t9);
          res.status(500).json({
            error: 'Failed to create user'
          });
        case 6:
          return _context9.a(2);
      }
    }, _callee9, null, [[0, 5]]);
  }));
  return function (_x15, _x16) {
    return _ref9.apply(this, arguments);
  };
}());
app.get('/getEmails', /*#__PURE__*/function () {
  var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(req, res) {
    var users, _t0;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          _context0.p = 0;
          _context0.n = 1;
          return DATABASE.collection(usersCollection).find({}, {
            projection: {
              email: 1
            }
          }).toArray();
        case 1:
          users = _context0.v;
          if (users.length === 0) {
            console.log("No users found");
            res.json({
              error: "No users found"
            });
          } else {
            res.status(200).json(users);
          }
          _context0.n = 3;
          break;
        case 2:
          _context0.p = 2;
          _t0 = _context0.v;
          res.status(500).json({
            error: 'Failed to retreive users'
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

/*********** SAVE NEW PROJECT ENDPOINT ************/

app.post('/newProject', /*#__PURE__*/function () {
  var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(req, res) {
    var _req$body, projectName, email, existingProject, date, dateOnly, projectData, result, _t1;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          _context1.p = 0;
          // FIRST CHECK IF A PROJECT WITH THE SAME NAME BY THE SAME USER EXISTS
          _req$body = req.body, projectName = _req$body.projectName, email = _req$body.email; // const existingProject = await DATABASE.collection(projectsCollection).findOne({
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
          dateOnly = date.split('T')[0]; // ONLY INSERT THE DOCUMENT IF SIMILAR NAME DOESN'T EXIST
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
          console.error('Error: ', _t1);
          res.status(500).json({
            message: 'Error saving project'
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
app.post('/addFollowing', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(req, res) {
    var users, results, _iterator, _step, user, following, result, _t10, _t11;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.p = _context10.n) {
        case 0:
          _context10.p = 0;
          _context10.n = 1;
          return DATABASE.collection(usersCollection).find({}).toArray();
        case 1:
          users = _context10.v;
          results = [];
          _iterator = _createForOfIteratorHelper(users);
          _context10.p = 2;
          _iterator.s();
        case 3:
          if ((_step = _iterator.n()).done) {
            _context10.n = 6;
            break;
          }
          user = _step.value;
          following = [];
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
          _context10.n = 4;
          return DATABASE.collection(usersCollection).updateOne({
            _id: user._id
          }, {
            $set: {
              following: following
            }
          });
        case 4:
          result = _context10.v;
          results.push({
            name: user.name,
            email: user.email,
            following: following,
            modifiedCount: result.modifiedCount
          });
        case 5:
          _context10.n = 3;
          break;
        case 6:
          _context10.n = 8;
          break;
        case 7:
          _context10.p = 7;
          _t10 = _context10.v;
          _iterator.e(_t10);
        case 8:
          _context10.p = 8;
          _iterator.f();
          return _context10.f(8);
        case 9:
          res.json({
            message: 'Following arrays added to all users',
            results: results
          });
          _context10.n = 11;
          break;
        case 10:
          _context10.p = 10;
          _t11 = _context10.v;
          console.error('Error adding following:', _t11);
          res.status(500).json({
            error: 'Failed to add following arrays'
          });
        case 11:
          return _context10.a(2);
      }
    }, _callee10, null, [[2, 7, 8, 9], [0, 10]]);
  }));
  return function (_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}());

// DELETE PROJECT
app.post('/deleteProject', /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(req, res) {
    var _req$body2, projectName, email, result, _t12;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.p = _context11.n) {
        case 0:
          _context11.p = 0;
          _req$body2 = req.body, projectName = _req$body2.projectName, email = _req$body2.email; // if (!projectName || !email) {
          //   return res.status(400).json({ message: 'Project name and email are required' });
          // }
          _context11.n = 1;
          return DATABASE.collection(projectsCollection).deleteOne({
            projectName: projectName,
            email: email
          });
        case 1:
          result = _context11.v;
          if (!(result.deletedCount === 0)) {
            _context11.n = 2;
            break;
          }
          return _context11.a(2, res.status(404).json({
            message: 'Project not found or already deleted'
          }));
        case 2:
          res.json({
            message: "Project deleted successfully",
            deletedCount: result.deletedCount
          });
          _context11.n = 4;
          break;
        case 3:
          _context11.p = 3;
          _t12 = _context11.v;
          console.error('Delete error: ', _t12);
          res.status(500).json({
            message: 'Error deleting project',
            error: _t12.message
          });
        case 4:
          return _context11.a(2);
      }
    }, _callee11, null, [[0, 3]]);
  }));
  return function (_x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}());

// SEND FREIND REQEUST
app.post('/sendFriendRequest', /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(req, res) {
    var _receiver$friendReque, _receiver$friends, _req$body3, senderUsername, receiverEmail, receiver, existingRequest, existingFriend, result, _t13;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.p = _context12.n) {
        case 0:
          _context12.p = 0;
          _req$body3 = req.body, senderUsername = _req$body3.senderUsername, receiverEmail = _req$body3.receiverEmail;
          if (!(!senderUsername || !receiverEmail)) {
            _context12.n = 1;
            break;
          }
          return _context12.a(2, res.status(400).json({
            message: 'Sender username and receiver email are required'
          }));
        case 1:
          _context12.n = 2;
          return DATABASE.collection('users').findOne({
            email: receiverEmail
          });
        case 2:
          receiver = _context12.v;
          if (receiver) {
            _context12.n = 3;
            break;
          }
          return _context12.a(2, res.status(404).json({
            message: 'User not found'
          }));
        case 3:
          existingRequest = (_receiver$friendReque = receiver.friendRequests) === null || _receiver$friendReque === void 0 ? void 0 : _receiver$friendReque.find(function (request) {
            return request.senderUsername === senderUsername;
          });
          if (!existingRequest) {
            _context12.n = 4;
            break;
          }
          return _context12.a(2, res.status(400).json({
            message: 'Friend request already sent'
          }));
        case 4:
          existingFriend = (_receiver$friends = receiver.friends) === null || _receiver$friends === void 0 ? void 0 : _receiver$friends.find(function (friend) {
            return friend.username === senderUsername;
          });
          if (!existingFriend) {
            _context12.n = 5;
            break;
          }
          return _context12.a(2, res.status(400).json({
            message: 'You are already friends with this user'
          }));
        case 5:
          _context12.n = 6;
          return DATABASE.collection('users').updateOne({
            email: receiverEmail
          }, {
            $push: {
              friendRequests: senderUsername
            }
          });
        case 6:
          result = _context12.v;
          if (!(result.modifiedCount === 0)) {
            _context12.n = 7;
            break;
          }
          return _context12.a(2, res.status(500).json({
            message: 'Failed to send friend request'
          }));
        case 7:
          res.json({
            message: 'Friend request sent successfully',
            receiver: receiver.name
          });
          _context12.n = 9;
          break;
        case 8:
          _context12.p = 8;
          _t13 = _context12.v;
          console.error('Error sending friend request:', _t13);
          res.status(500).json({
            message: 'Error sending friend request',
            error: _t13.message
          });
        case 9:
          return _context12.a(2);
      }
    }, _callee12, null, [[0, 8]]);
  }));
  return function (_x25, _x26) {
    return _ref12.apply(this, arguments);
  };
}());

// ACCEPT FRIEND REQUEST
app.post('/acceptFriendRequest', /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(req, res) {
    var _user$friends, _req$body4, userEmail, requesterEmail, user, requester, alreadyFriends, session, _t14;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.p = _context14.n) {
        case 0:
          _context14.p = 0;
          _req$body4 = req.body, userEmail = _req$body4.userEmail, requesterEmail = _req$body4.requesterEmail;
          if (!(!userEmail || !requesterEmail)) {
            _context14.n = 1;
            break;
          }
          return _context14.a(2, res.status(400).json({
            message: 'User email and requester email are required'
          }));
        case 1:
          _context14.n = 2;
          return DATABASE.collection('users').findOne({
            email: userEmail
          });
        case 2:
          user = _context14.v;
          if (user) {
            _context14.n = 3;
            break;
          }
          return _context14.a(2, res.status(404).json({
            message: 'User not found'
          }));
        case 3:
          _context14.n = 4;
          return DATABASE.collection('users').findOne({
            email: requesterEmail
          });
        case 4:
          requester = _context14.v;
          if (requester) {
            _context14.n = 5;
            break;
          }
          return _context14.a(2, res.status(404).json({
            message: 'Requester not found'
          }));
        case 5:
          if (!(!user.friendRequests || !user.friendRequests.includes(requesterEmail))) {
            _context14.n = 6;
            break;
          }
          return _context14.a(2, res.status(400).json({
            message: 'Friend request not found'
          }));
        case 6:
          alreadyFriends = (_user$friends = user.friends) === null || _user$friends === void 0 ? void 0 : _user$friends.some(function (friend) {
            return friend.username === requesterEmail;
          });
          if (!alreadyFriends) {
            _context14.n = 7;
            break;
          }
          return _context14.a(2, res.status(400).json({
            message: 'Already friends with this user'
          }));
        case 7:
          session = DATABASE.client.startSession();
          _context14.p = 8;
          _context14.n = 9;
          return session.withTransaction(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
            return _regenerator().w(function (_context13) {
              while (1) switch (_context13.n) {
                case 0:
                  _context13.n = 1;
                  return DATABASE.collection(usersCollection).updateOne({
                    email: userEmail
                  }, {
                    $pull: {
                      friendRequests: requesterEmail
                    },
                    $push: {
                      friends: {
                        username: requesterEmail,
                        image: requester.profileImage
                      }
                    }
                  }, {
                    session: session
                  });
                case 1:
                  _context13.n = 2;
                  return DATABASE.collection(usersCollection).updateOne({
                    email: requesterEmail
                  }, {
                    $push: {
                      friends: {
                        username: userEmail,
                        image: user.profileImage
                      }
                    }
                  }, {
                    session: session
                  });
                case 2:
                  return _context13.a(2);
              }
            }, _callee13);
          })));
        case 9:
          _context14.p = 9;
          _context14.n = 10;
          return session.endSession();
        case 10:
          return _context14.f(9);
        case 11:
          res.json({
            message: 'Friend request accepted successfully',
            newFriend: {
              username: requesterEmail,
              image: requester.profileImage
            }
          });
          _context14.n = 13;
          break;
        case 12:
          _context14.p = 12;
          _t14 = _context14.v;
          console.error('Error accepting friend request:', _t14);
          res.status(500).json({
            message: 'Error accepting friend request',
            error: _t14.message
          });
        case 13:
          return _context14.a(2);
      }
    }, _callee14, null, [[8,, 9, 11], [0, 12]]);
  }));
  return function (_x27, _x28) {
    return _ref13.apply(this, arguments);
  };
}());

// DRY: DON'T REPEAT YOURSELF BUDDY
var findOneProject = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(email, projectName) {
    var Project;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          _context15.n = 1;
          return DATABASE.collection(projectsCollection).findOne({
            email: email,
            projectName: projectName
          });
        case 1:
          Project = _context15.v;
          return _context15.a(2, Project);
      }
    }, _callee15);
  }));
  return function findOneProject(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
var findManyProject = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(email) {
    var Projects;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.n) {
        case 0:
          _context16.n = 1;
          return DATABASE.collection(projectsCollection).find({
            email: email
          }).toArray();
        case 1:
          Projects = _context16.v;
          return _context16.a(2, Projects);
      }
    }, _callee16);
  }));
  return function findManyProject(_x31) {
    return _ref16.apply(this, arguments);
  };
}();
app.get('/{*any}', function (req, res) {
  res.sendFile(path.resolve('FrontEnd/public', 'index.html'));
});
function startServer() {
  return _startServer.apply(this, arguments);
}
function _startServer() {
  _startServer = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
    var _t16;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.p = _context18.n) {
        case 0:
          _context18.p = 0;
          _context18.n = 1;
          return connectToMongo();
        case 1:
          app.listen(PORT, function () {
            console.log("Server running on http://localhost:".concat(PORT));
          });
          _context18.n = 3;
          break;
        case 2:
          _context18.p = 2;
          _t16 = _context18.v;
          console.error('Failed to start server:', _t16);
        case 3:
          return _context18.a(2);
      }
    }, _callee18, null, [[0, 2]]);
  }));
  return _startServer.apply(this, arguments);
}
startServer();