/**
 * Created by weijianli on 16/12/19.
 */
module.exports = {
  name: 'article-p',
  data: function () {
    return {
      a:11
    }
  },
  render (h) {
    return (
      <div>
        <h1>article</h1>
        <h1 style="text-align: center">article{this.a}</h1>
      </div>
    )
  }
}