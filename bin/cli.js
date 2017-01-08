#!/usr/bin/env node
'use strict';
const meow = require('meow');
const pkg = require('../package.json');

var cli =meow({
  help:[
    'Version '+pkg.version,
    'Usage',
    'addtag <新增标签>',
    'lstag <显示标签标签>',
    'addarticle <标签> <新增文章>'
  ],
  pkg:pkg,
  alias: {
    h: 'help'
  }
});

var opts = cli.flags;
var args = cli.input;

var cmd = args[0];


if(opts.h){
  cli.showHelp();
}

switch(cmd){
  case 'addtag':
    require('./addtag')(args[1]);break;
  case 'lstag':
    require('./lstag')(); break;
  case 'addarticle':
    require('./addarticle')(args[1],args[2]); break;
  default:
    if(!opts.h){
      cli.showHelp();
    }
    break;
}
