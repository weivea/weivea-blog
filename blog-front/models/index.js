/**
 * Created by weijianli on 16/12/21.
 */
const articleList = require('./articleList');
const article = require('./article');

module.exports = function (Vue) {
  return [articleList(Vue),article()]
};