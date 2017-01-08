import './home-p.less'
const getArticleList = require('../../models/pipeLine/getArticleList');
module.exports = {
  name: 'home-p',
  data: function () {
    var twigs= this.$twigWarp({
      articleList: this.$twig.articleList
    });
    var privates={
      test:'aa'
    };
    return Object.assign(twigs,privates)
  },

  beforeRouteEnter (to, from, next) {
    next(vm=>{
      if(to.params.tag != vm.articleList.tag){
        vm.getArticleListFun(to.params.tag);
      }
    })
  },
  watch: {
    $route () {
      this.getArticleListFun(this.$route.params.tag);
    }
  },
  methods:{
    getArticleListFun:function (tag) {
      getArticleList(this.$http,tag).then((re) => {
        if(re.err){
          alert(re.str);return;
        }
        this.articleList.tag = tag;
        this.articleList.payload = re.data.articleList;
      }).catch(function (err) {
        alert(err);
      })
    }
  },
  render (h) {
    var articleList = this.articleList.payload;
    var tag = this.articleList.tag;
    return (
      <div id="home-p">
        <h2>文章列表：{tag}</h2>
        <ul>
        {articleList.map(function (item, ind) {
          return (
            <li key={ind} class="article">
              <router-link class="f-db t" to={'/article/'+encodeURIComponent(item.name)}>{item.name}</router-link>
              <router-link class="tag" to={'/list/'+encodeURIComponent(item.tag)}>{item.tag}</router-link>
              <p class="date">{item.timeStamp}</p>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
};
