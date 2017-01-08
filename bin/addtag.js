/**
 * Created by weijianli on 16/12/20.
 */
"use strict";
const fs = require('fs');
const path = require('path');

const tagPath = path.resolve(__dirname,'../db/tags.json');

function addtag(tagName) {
  fs.readFile(tagPath, 'utf-8', function(err,data){
    var tags = JSON.parse(data);
    if(tags[tagName]){
      console.log(`已经存在tag:${tagName}`)
    }else{
      tags[tagName] = 1;

      fs.writeFile(tagPath, JSON.stringify(tags,null,2), (err) => {
        if (err){
          console.log('addtag error:\n'+err);
        }
        console.log(`add tag ${tagName} success!`);
      });
    }
  });
}

module.exports = addtag;

