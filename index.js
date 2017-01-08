/**
 * Created by weijianli on 16/12/19.
 */
/**
 * Created by weijianli on 16/12/15.
 */
"use strict";
const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const server = require('http').Server(app);

//controls
const getArticleList = require('./controls/getArticleList');
const getArticle = require('./controls/getArticle');

app.use('/public',express.static('public'));
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});
app.set('trust proxy', 1)
app.use(session({
  secret: 'keyboard weivea',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 3600000 }
}))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index.html');
});
app.get('/getArticleList', getArticleList);
app.get('/getArticle', getArticle);


server.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});