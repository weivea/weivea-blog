/**
 * Created by weijianli on 16/12/19.
 */
import VueRouter from 'vue-router'

const homeP = r => require(['./components/home-p/home-p'], r);
const article = r => require(['./components/article/article'], r);

function router(Vue){
  Vue.use(VueRouter);
  return new VueRouter({
    routes: [
      { path: '/list/:tag', component: homeP },
      { path: '/article/:title', component: article },

      //重定向
      { path: '/**', redirect: '/list/all'}
    ]
  });
}

export default router