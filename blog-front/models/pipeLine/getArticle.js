/**
 * Created by weijianli on 17/1/4.
 */
module.exports = function (http,title) {
  return new Promise(function (resolve,reject) {
    http.get(`/getArticle?title=${title}`).then((response) => {
      return response.json();
    }, (response) => {
      reject(`http error: ${response.statusText}`)
    }).then(json => {
      resolve(json)
    });
  })
}