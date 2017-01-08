/**
 * Created by weijianli on 16/12/21.
 */
module.exports = function (http,tag) {
  return new Promise(function (resolve,reject) {
    http.get(`/getArticleList?tag=${tag}`).then((response) => {
      return response.json();
    }, (response) => {
      reject(`http error: ${response.statusText}`)
    }).then(json => {
      resolve(json)
    });
  })
}