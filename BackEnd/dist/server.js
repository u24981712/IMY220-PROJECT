"use strict";

var _excluded = ["confirmpassword"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var express = require("express");
var path = require("path");
var fs = require("fs");
var cors = require("cors");
var app = express();
var PORT = 8000;
app.use(express["static"]("FrontEnd/public"));
app.use(cors());
app.use(express.json());
app.get('/api', function (req, res) {
  res.json({
    message: "Bruhhh"
  });
});
app.get('/getRepos', function (req, res) {
  try {
    var dataPath = path.join(__dirname, '../data.json');
    var jsonData = fs.readFileSync(dataPath, 'utf8');
    var data = JSON.parse(jsonData);
    res.json(data);
  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({
      error: 'Failed to read data file'
    });
  }
});
app.get('/getRepo/:projectName', function (req, res) {
  try {
    var dataPath = path.join(__dirname, '../data.json');
    var jsonData = fs.readFileSync(dataPath, 'utf8');
    var data = JSON.parse(jsonData);
    var projectName = decodeURIComponent(req.params.projectName);

    // Find project by name instead of index
    var project = data.find(function (repo) {
      return repo.projectName === projectName;
    });
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({
        error: 'Project not found'
      });
    }
  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({
      error: 'Failed to read data file'
    });
  }
});
app.get('/getRepos/:email', function (req, res) {
  try {
    var dataPath = path.join(__dirname, '../data.json');
    var jsonData = fs.readFileSync(dataPath, 'utf8');
    var data = JSON.parse(jsonData);
    var email = req.params.email;
    var userRepos = data.filter(function (repo) {
      return repo.email === email;
    });
    res.json(userRepos);
  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({
      error: 'Failed to read data file'
    });
  }
});
app.get('/getUsers', function (req, res) {
  try {
    var dataPath = path.join(__dirname, '../Users.json');
    var jsonData = fs.readFileSync(dataPath, 'utf8');
    var data = JSON.parse(jsonData);
    res.json(data);
  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({
      error: 'Failed to read data file'
    });
  }
});
app.get('/getUser/:email', function (req, res) {
  try {
    var dataPath = path.join(__dirname, '../Users.json');
    var jsonData = fs.readFileSync(dataPath, 'utf8');
    var users = JSON.parse(jsonData);
    var email = req.params.email;
    var user = users.find(function (user) {
      return user.email === email;
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({
        error: 'User not found'
      });
    }
  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({
      error: 'Failed to read data file'
    });
  }
});

/*********** TESTIMONIAL ENDPOINT ************/

app.get('/testimonials', function (req, res) {
  try {
    var dataPath = path.join(__dirname, '../testimonials.json');
    var jsonData = fs.readFileSync(dataPath, 'utf8');
    var testimonials = JSON.parse(jsonData);
    res.json(testimonials);
  } catch (error) {
    console.error('Error reading testimonials.json:', error);
    res.status(500).json({
      error: 'Failed to read testimonials file'
    });
  }
});
app.post("/signup", function (req, res) {
  try {
    var dataPath = path.join(__dirname, '../Users.json');
    var jsonData = fs.readFileSync(dataPath, 'utf8');
    var users = JSON.parse(jsonData);
    var newUser = req.body;
    var confirmpassword = newUser.confirmpassword,
      userToSave = _objectWithoutProperties(newUser, _excluded);
    users.push(userToSave);
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));
    res.status(201).json({
      message: 'User created successfully',
      user: userToSave
    });
  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({
      error: 'Failed to read data file'
    });
  }
});
app.get('/getEmails', function (req, res) {
  try {
    var dataPath = path.join(__dirname, '../Users.json');
    var jsonData = fs.readFileSync(dataPath, 'utf8');
    var users = JSON.parse(jsonData);
    var emails = users.map(function (user) {
      return user.email;
    });
    res.json(emails);
  } catch (error) {
    console.error('Error reading Users.json:', error);
    res.status(500).json({
      error: 'Failed to read users file'
    });
  }
});
app.get('/{*any}', function (req, res) {
  res.sendFile(path.resolve('FrontEnd/public', 'index.html'));
});
app.listen(PORT, function () {
  console.log("Server running on http://localhost:".concat(PORT));
});