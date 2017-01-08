/**
 * Created by weijianli on 16/12/20.
 */
"use strict";
const fs = require('fs');
const path = require('path');
const dateFormat = require('../lib/dateFormat');

const tagPath = path.resolve(__dirname,'../db/tags.json');
const articlesPath = path.resolve(__dirname,'../db/articles');

function addarticle(tagName, articleName) {
  fs.readFile(path.join(tagPath), 'utf-8', function(err,data){
    var tags = JSON.parse(data);
    if(tags[tagName]){
      if(articleName){
        articleName = articleName.replace(/\.$/,'');
        var article = {
          tag:tagName,
          timeStamp: dateFormat.call(new Date(),"yyyy-MM-dd hh:mm:ss.S"),
          name:articleName+'.md'
        };

        var articlePathName = path.resolve(__dirname,`../mds/${article.name}`);
        fs.exists(articlePathName, (exists) => {
          if(exists){
            console.log(`article ${article.name} already exists~`);
          }else {
            fs.appendFile(path.resolve(__dirname,`../db/articles`), JSON.stringify(article)+'\n', (err) => {
              if (err) {
                console.log(`add article ${article.name}: ${err}`)
              }else{

                var mdString = `# ${articleName}
<a style="background: #13965a;color: #fff;padding: 5px;border-radius: 3px;font-size: 14px;" href="/#/list/${encodeURIComponent(tagName)}">${tagName}</a>
&nbsp;&nbsp;${article.timeStamp}
<br/>
<br/>
***
`;
                fs.writeFile(articlePathName, mdString, (err) => {
                  if (err){
                    console.log(`add article ${article.name}: ${err}`)
                  }
                  console.log(`add article ${article.name} success`);
                });
              }
            });
          }
        });

      }else{
        console.log(`error!!! need articleName`);
      }

    }else{
      console.log(`error!!! tag:${tagName} do not exist`)
    }
  })
}

module.exports = addarticle