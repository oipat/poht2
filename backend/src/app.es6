'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import cors from 'cors';
import Datastore from 'nedb';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Component from './Component'


const db = new Datastore();
const app = express();
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/ssr', (req, res) => {
  res.send(
    ReactDOMServer.renderToString(Component())
  );
});

app.get('/blogi/posts', (req, res) => {
  db.find({}).sort({ created: -1 }).exec((err, docs) => {
    res.send(docs);
  });
});

app.post('/blogi/posts', (req, res) => {
  validatePost(req);
  var errors = req.validationErrors();
  if(errors) {
    res.status(422);
    res.send({errors: "123"});
  }
  else {
    db.insert(Object.assign({ created: new Date() }, req.body), (err, newDoc) => {
      res.status(201);
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
  validatePost(req);
  var errors = req.validationErrors();
  if(errors) {
    res.status(422);
    res.send({errors: "123"});
  }
  db.update({ _id: req.params.id }, { $set: req.body },
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
    body: "BlogPostBody1\n\npara\n# Head1\n## Head2\n```\ncode\n```",
    author: "Author1",
    created: new Date('2016-09-01'),
  },
  {
    title: "BlogPostTitle12",
    body: "BlogPostBody2",
    author: "Author2",
    created: new Date('2016-08-30'),
  },
  {
    title: "BlogPostTitle13",
    body: "BlogPostBody3",
    author: "Author3",
    created: new Date('2016-07-01'),
  },
  {
    title: "BlogPostTitle14",
    body: "BlogPostBody4\n\npara\n# Head1\n## Head2\n```\ncode\n```",
    author: "Author4",
    created: new Date('2016-06-22'),
  }], (err, newDoc) => {
    if(!err) {
      console.log(newDoc);
    } else {
      console.log("error inserting: " + err);
    }
  }
);

function validatePost(req) {
  req.checkBody('title').notEmpty().isLength(3, 50);
  req.checkBody('body').notEmpty();
}
