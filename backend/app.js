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

app.delete('/blogi/posts/:id', (req, res) => {
  db.remove({ _id: req.params.id }, {}, (err, numRemoved) => {
    res.status(err || numRemoved !== 1 ? 500 : 200);
    res.send();
  });
});

app.put('/blogi/posts/:id', (req, res) => {
  db.update({ _id: req.params.id }, req.body,
      { upsert: true }, (err, numUpdated) => {
    res.status(err || numUpdated !== 1 ? 500 : 200);
    res.send();
  });
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
  },
  {
    title: "BlogPostTitle13",
    body: "BlogPostBody3",
    author: "Author3"
  },
  {
    title: "BlogPostTitle14",
    body: "BlogPostBody4",
    author: "Author4"
  }], (err, newDoc) => {
    if(!err) {
      console.log(newDoc);
    } else {
      console.log("error inserting: " + err);
    }
  }
);
