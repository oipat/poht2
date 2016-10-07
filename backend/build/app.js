'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _nedb = require('nedb');

var _nedb2 = _interopRequireDefault(_nedb);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _Component = require('./Component');

var _Component2 = _interopRequireDefault(_Component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _nedb2.default();
var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use((0, _expressValidator2.default)());
app.use((0, _cors2.default)());

app.set('port', process.env.PORT || 5000);

app.get('/ssr', function (req, res) {
  res.send(_server2.default.renderToString((0, _Component2.default)()));
});

app.get('/blogi/posts', function (req, res) {
  db.find({}).sort({ created: -1 }).exec(function (err, docs) {
    res.send(docs);
  });
});

app.post('/blogi/posts', function (req, res) {
  validatePost(req);
  var errors = req.validationErrors();
  if (errors) {
    res.status(422);
    res.send({ errors: "123" });
  } else {
    db.insert(Object.assign({ created: new Date() }, req.body), function (err, newDoc) {
      res.status(201);
      res.send(newDoc);
    });
  }
});

app.delete('/blogi/posts/:id', function (req, res) {
  db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
    res.status(err || numRemoved !== 1 ? 500 : 200);
    res.send();
  });
});

app.put('/blogi/posts/:id', function (req, res) {
  validatePost(req);
  var errors = req.validationErrors();
  if (errors) {
    res.status(422);
    res.send({ errors: "123" });
  }
  db.update({ _id: req.params.id }, { $set: req.body }, { upsert: true }, function (err, numUpdated) {
    res.status(err || numUpdated !== 1 ? 500 : 200);
    res.send();
  });
});

app.listen(app.get('port'), function () {
  console.log('Node app is running at localhost:' + app.get('port'));
});

// Testdata
db.insert([{
  title: "BlogPostTitle11",
  body: "BlogPostBody1\n\npara\n# Head1\n## Head2\n```\ncode\n```",
  author: "Author1",
  created: new Date('2016-09-01')
}, {
  title: "BlogPostTitle12",
  body: "BlogPostBody2",
  author: "Author2",
  created: new Date('2016-08-30')
}, {
  title: "BlogPostTitle13",
  body: "BlogPostBody3",
  author: "Author3",
  created: new Date('2016-07-01')
}, {
  title: "BlogPostTitle14",
  body: "BlogPostBody4\n\npara\n# Head1\n## Head2\n```\ncode\n```",
  author: "Author4",
  created: new Date('2016-06-22')
}], function (err, newDoc) {
  if (!err) {
    console.log(newDoc);
  } else {
    console.log("error inserting: " + err);
  }
});

function validatePost(req) {
  req.checkBody('title').notEmpty().isLength(3, 50);
  req.checkBody('body').notEmpty();
}