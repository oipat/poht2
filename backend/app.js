(function() {
'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator'),
  cors = require('cors');
var Datastore = require('nedb');
var db = {};
db.blogPosts = new Datastore();

var app = express();
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());

app.set('port', (process.env.PORT || 5000));
app.get('/blogi/posts', function(req, res) {
  db.blogPosts.find({}, function(err, docs) {
    res.send(docs);
  });
});

app.post('/blogi/posts', function(req, res) {
  req.checkBody('title').notEmpty().isAlpha().isLength(3, 50);
  req.checkBody('body').notEmpty().isAlpha();

  var errors = req.validationErrors();
  if(errors) {
    res.status(422);
    res.send({errors: "123"});
  }
  else {
    db.blogPosts.insert(req.body, function(err, newDoc) {
      res.send(newDoc);
    });
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running at localhost:' + app.get('port'));
});

// Testdata
db.blogPosts.insert([
  {
    title: "BlogPostTitle1",
    body: "BlogPostBody1",
    author: "Author1"
  },
  {
    title: "BlogPostTitle2",
    body: "BlogPostBody2",
    author: "Author2"
  }], function(err, newDoc) {
    if(!err) {
      console.log(newDoc);
    } else {
      console.log("error inserting: " + err);
    }
  });

})();