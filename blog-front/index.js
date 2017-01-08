/**
 * Created by weijianli on 16/12/19.
 */
import './index.less'
import Vue from 'vue/dist/vue'
import router from './router'
import VueResource from 'vue-resource'
import twig from 'vue-twig'
const lSide = require('./components/l-side/l-side');
document.body.addEventListener('touchstart', function(){});//服务于active伪类
const models = require('./models/index');


Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
const  route = router(Vue);

const models_ = models(Vue);
Vue.use(twig, models_);

twig.ready(function () {
  const app = new Vue({
    el:"#app",
    router:route,
    render (h) {
      return (<div>
        <l-side/>
        <div id="m-c">
          <router-view></router-view>
        </div>
      </div>)
    },
    components:{
      lSide:lSide
    }
  });
})
