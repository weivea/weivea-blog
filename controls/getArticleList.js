/**
 * Created by weijianli on 16/12/21.
 */
"use strict";
const co = require('co');
const fs = require('fs');
const path = require('path');
const getArticleList = co.wrap(function* (req) {
  var re;
  re = yield readaAticles();
  if(req.query.tag != 'all'){
    re.filter(function (item) {
      return req.query.tag == item.tag
    })
  }
  return re;
})

function readaAticles() {
  return new Promise(function (resolve, rejsct) {
    fs.readFile(path.resolve(__dirname,'../db/articles'), 'utf-8', function(err,data){
      if(err){
        rejsct(err.stack);
      }else{
        data = `[${data.replace(/\n/gm,',').replace(/^,/,'').replace(/,$/,'')}]`;
        var articleList = JSON.parse(data);
        resolve(articleList)
      }
    });
  });

}

module.exports = function (req, res) {
  getArticleList(req).then(function (re) {
    res.send({
      err:0,
      str:'success',
      data:{
        articleList:re
      }
    })
  }).catch(function (err) {
    res.send({
      err:1,
      str:err
    })
  })
}