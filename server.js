const express = require("express");
const app = express();
const fs = require("fs");
app.set("view engine", "ejs");
const Port=process.env.Port||3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/data", express.static(__dirname + "/data"));

//*Ajax
const quizFileDir = fs
  .readdirSync("./data")
  .filter((name) => name.endsWith(".js"));

const quizzes = [];

for (const file of quizFileDir) {
  const quizFile = require(`./data/${file}`);
  quizzes.push({
    title: quizFile.quizData.title,
    slug: file.replace(".js", "")
  });
}

//*Mongodb Connection
const mongodb = require('mongodb').MongoClient;
const url = "mongodb+srv://soumyasis1184:1234567890@cluster12.1n3wluv.mongodb.net/";
let databaseName;
let CollectionName;
mongodb.connect(url).then((result => {
  databaseName = result.db('Quizeapp');
  CollectionName = databaseName.collection('Alldata');
  console.log('mongodb are connected.........');
})).catch((err) => {
  console.log(err);
})



//*Routes :

app.get('/', (req, res) => {
  res.render('index');
})
app.get('/signup-form', (req, res) => {
  res.render('signup');
})
app.post('/Signup', (req, res) => {
  const fromData = {
    "name": req.body.username,
    "age":req.body.age,
    "gender":req.body.gender,
    "password": req.body.password
  }
  CollectionName.insertOne(fromData).then((result) => {
    console.log("signup sucessfull")
    res.redirect('/');
  }).catch((err) => {
    console.log(err);
  })
})
app.post('/login', (req, res) => {
  CollectionName.findOne({ $and: [{ 'name': req.body.name }, { 'password': req.body.password }] }).then((responce) => {
    if (responce == null) {
      res.send('/invalid password');
    }
    else {
      console.log('login sucessfull')
      res.render('dashboard', { quizzes })
    }
  })
})

app.get("/dashboard", (req, res) => {
  res.render("index.ejs", { quizzes });
});

app.get("/quiz", (req, res) => {
  res.render("quiz.ejs", { query: req.query.name });
});

// Add a new route for quiz attempts
app.get("/attempt", (req, res) => {
  const quizSlug = req.query.slug;
  const username = req.query.username;

  // Render the attempt page with necessary data
  res.render("attempt.ejs", { quizSlug, username });
});

// Add logic to handle quiz attempts
app.post("/attempt", (req, res) => {
  const { quizSlug, username, score } = req.body;

  // Update the user's attempt count for the specific quiz in the database
  CollectionName.updateOne(
    { name: username },
    { $inc: { [`attempts.${quizSlug}`]: 1 } }, // Increment the attempt count for the specific quiz
    { upsert: true } // Create a new document if it doesn't exist
  )
    .then(() => {
      res.send("Attempt recorded successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Failed to record attempt");
    });
});

app.listen(Port, () => {
  console.log(`Running the port no ${Port}`);
});
