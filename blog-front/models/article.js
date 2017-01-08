
/**
 * Created by weijianli on 17/1/4.
 */
let defaultData = {
  title:'',
  body: ''
};
module.exports = function(Vue) {
  return {
    key: "article",
    saveType: null,//存储类型.localStorage/sessionStorage
    dataFun:  function (data) {//可以是普通函数,Generator函数(需要co模块),async函数
      return defaultData;//返回初始化的数据
    }
  }
};