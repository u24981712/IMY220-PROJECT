const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(express.static("FrontEnd/public"));

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: "Bruhhh" })
})

app.get('/getRepos', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data.json');

    const jsonData = fs.readFileSync(dataPath, 'utf8');

    const data = JSON.parse(jsonData);

    res.json(data);

  } catch (error) {

    console.error('Error reading data.json:', error);

    res.status(500).json({ error: 'Failed to read data file' });
  }
});

app.get('/getRepo/:projectName', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data.json');
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(jsonData);

    const projectName = decodeURIComponent(req.params.projectName);

    // Find project by name instead of index
    const project = data.find(repo => repo.projectName === projectName);

    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }

  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({ error: 'Failed to read data file' });
  }
});

app.get('/getRepos/:email', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data.json');
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(jsonData);

    const email = req.params.email;

    const userRepos = data.filter(repo => repo.email === email);

    res.json(userRepos);

  } catch (error) {
    console.error('Error reading data.json:', error);
    res.status(500).json({ error: 'Failed to read data file' });
  }
});

app.get('/getUsers', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../Users.json');

    const jsonData = fs.readFileSync(dataPath, 'utf8');

    const data = JSON.parse(jsonData);

    res.json(data);

  } catch (error) {

    console.error('Error reading data.json:', error);

    res.status(500).json({ error: 'Failed to read data file' });
  }
});

app.get('/getUser/:email', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../Users.json');
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    const users = JSON.parse(jsonData);
    const email = req.params.email;

    const user = users.find(user => user.email === email);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }

  } catch (error) {

    console.error('Error reading data.json:', error);

    res.status(500).json({ error: 'Failed to read data file' });
  }
});

/*********** TESTIMONIAL ENDPOINT ************/

app.get('/testimonials', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../testimonials.json');
    
    const jsonData = fs.readFileSync(dataPath, 'utf8');
    const testimonials = JSON.parse(jsonData);

    res.json(testimonials);

  } catch (error) {
    console.error('Error reading testimonials.json:', error);
    res.status(500).json({ error: 'Failed to read testimonials file' });
  }
});

app.post("/signup", (req, res) => {

  try {
    const dataPath = path.join(__dirname, '../Users.json');

    const jsonData = fs.readFileSync(dataPath, 'utf8');

    const users = JSON.parse(jsonData);

    const newUser = req.body;

    const { confirmpassword, ...userToSave } = newUser;

    users.push(userToSave);

    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));

    res.status(201).json({
      message: 'User created successfully',
      user: userToSave
    });

  } catch (error) {

    console.error('Error reading data.json:', error);

    res.status(500).json({ error: 'Failed to read data file' });
  }

})

app.get('/getEmails', (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../Users.json');

    const jsonData = fs.readFileSync(dataPath, 'utf8');

    const users = JSON.parse(jsonData);

    const emails = users.map(user => user.email);

    res.json(emails);

  } catch (error) {
    console.error('Error reading Users.json:', error);
    res.status(500).json({ error: 'Failed to read users file' });
  }
});


app.get('/{*any}', (req, res) => {
  res.sendFile(path.resolve('FrontEnd/public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});