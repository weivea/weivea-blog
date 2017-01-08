/**
 * Created by weijianli on 16/12/21.
 */
//const  getArticleList = require('./pipeLine/getArticleList')
let defaultData = {
  tag:'',
  payload: [{
    name: "没有数据",
    tag: "lalala",
    timeStamp: "2016-12-21 14:32:59.452"
  }]
};
module.exports = function(Vue) {
  return {
    key: "articleList",
    saveType: null,//存储类型.localStorage/sessionStorage
    dataFun:  function (data) {//可以是普通函数,Generator函数(需要co模块),async函数
      // var re = await getArticleList(Vue.http,'all')
      // if(re.err){
      //   alert(re.str);
      // }else {
      //   defaultData.payload = re.data.articleList;
      // }
      return defaultData;//返回初始化的数据
    }
  }
};