/**
 * Created by weijianli on 16/12/19.
 */
import './l-side.less'

module.exports = {
  name:'l-side',
  data (){
    return {
      lSideClass:{
        "o-auto":false
      }
    }
  },
  methods:{
    showMenu:function () {
      this.lSideClass["o-auto"] = !this.lSideClass["o-auto"];
    }
  },
  render (h) {
    return (
      <div id="l-side" class={this.lSideClass}>
        <h1>
          weivea`s blog
        </h1>
        <div class="flex-box menu-1">
          <a class="f-db flex1">个人</a>
          {/*<a class="f-db flex1">文章</a>*/}
          <router-link class="f-db flex1" to="/list/all">文章</router-link>
          <a class="f-db flex1">收藏</a>
        </div>
        <a class="menu-btn" onClick={this.showMenu}>
          ...
        </a>
      </div>
    )
  }
}