import "./article.less"
const getArticle = require('../../models/pipeLine/getArticle');

module.exports =  {
  name: 'article-p',
  data: function () {
    var twigs= this.$twigWarp({
      article: this.$twig.article
    });
    var privates={
      test:'aa'
    };
    return Object.assign(twigs,privates)
  },
  beforeRouteEnter (to, from, next) {
    next(vm=>{
      if(to.params.title != vm.article.title){
        vm.getArticleFun(to.params.title);
      }
    })
  },
  watch: {
    $route () {
      this.getArticleFun(this.$route.params.title);
    }
  },
  methods:{
    getArticleFun:function (title) {
      if(this.article.title == title){
        return;
      }
      getArticle(this.$http,title).then((re) => {
        if(re.err){
          alert(re.str);return;
        }

        if(title == re.data.title){
          this.article.title = title;
          this.article.body = re.data.body;
        }
      }).catch(function (err) {
        alert(err);
      })
    }
  },
  render (h) {
    const title = this.article.title
    const body = this.article.body
    return (
      <div id="article-box">

        <br/>
        <div class="a-body" domPropsInnerHTML={body}>

        </div>
      </div>
    )
  }
}