/**
 * Created by weijianli on 17/1/4.
 */
"use strict";
const co = require('co');
const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it'),
  md = new MarkdownIt({
    html:         true,        // Enable HTML tags in source
    xhtmlOut:     true,        // Use '/' to close single tags (<br />).
    //breaks:       true,        // Convert '\n' in paragraphs into <br>
    linkify:      true,        // Autoconvert URL-like text to links

  });
const getArticle = co.wrap(function *(req) {
  var re;
  if(req.query.title){
    re = yield readAticle(req.query.title);
    return re;
  }else {
    throw `queryUrl:${req.originalUrl}; param of title does not have value`;
  }
});

function readAticle(title) {
  return new Promise(function (resolve, rejsct) {
    fs.readFile(path.resolve(__dirname,'../mds/'+title), 'utf-8', function(err,data){
      if(err){
        rejsct(err.stack);
      }else{
        resolve({
          body:md.render(data),
          title:title
        })
      }
    });
  });

}

module.exports = function (req, res) {
  getArticle(req).then(function (re) {
    res.send({
      err:0,
      str:'success',
      data:re
    })
  }).catch(function (err) {
    res.send({
      err:1,
      str:err
    })
  })
}