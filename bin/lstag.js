/**
 * Created by weijianli on 16/12/20.
 */
"use strict";
const fs = require('fs');
const path = require('path');

const tagPath = path.resolve(__dirname,'../db/tags.json');

function lstag() {
  fs.readFile(path.join(tagPath), 'utf-8', function (err, data) {
    var tags = JSON.parse(data);
    console.log(Object.keys(tags).join('\n'));
  })
}
module.exports = lstag;