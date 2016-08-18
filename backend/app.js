'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator'),
  cors = require('cors');
const Datastore = require('nedb');
const db = new Datastore();

const app = express();
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());

app.set('port', (process.env.PORT || 5000));
app.get('/blogi/posts', (req, res) => {
  db.find({}, (err, docs) => {
    res.send(docs);
  });
});

app.post('/blogi/posts', (req, res) => {
  req.checkBody('title').notEmpty().isLength(3, 50);
  req.checkBody('body').notEmpty();

  var errors = req.validationErrors();
  if(errors) {
    res.status(422);
    res.send({errors: "123"});
  }
  else {
    db.insert(req.body, (err, newDoc) => {
      res.send(newDoc);
    });
  }
});

app.listen(app.get('port'), () => {
  console.log('Node app is running at localhost:' + app.get('port'));
});

// Testdata
db.insert([
  {
    title: "BlogPostTitle11",
    body: "BlogPostBody1",
    author: "Author1"
  },
  {
    title: "BlogPostTitle12",
    body: "BlogPostBody2",
    author: "Author2"
  }], (err, newDoc) => {
    if(!err) {
      console.log(newDoc);
    } else {
      console.log("error inserting: " + err);
    }
  }
);
