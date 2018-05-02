var app = require('koa')();
var router = require('koa-router')();

//首页文章轮播列表
var homeArticleData = require('./home/Article.js');
router.get('/api/article', function *(next) {
    this.body = homeArticleData
});

//首页超值特惠列表
var homeSaleData = require('./home/Sale.js')
router.get('/api/homesale', function *(next) {
    this.body = homeSaleData
});

//首页猜你喜欢列表
var homeListData = require('./home/List.js')
router.get('/api/homelist/:city/:page', function *(next) {
    // 参数
    const params = this.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    this.body = homeListData
});


//搜索关键字列表
var searchKeyList = require('./search/SearchKeyList.js')
router.get('/api/searchkeylist/:city', function *(next) {
    this.body = searchKeyList
});

//搜索联想列表
var searchSuggestList = require('./search/SearchSuggestList.js')
router.get('/api/searchsuggestlist/:keyword', function *(next) {
    this.body = searchSuggestList
});

//搜索结果列表
var searchResultList = require('./search/SearchResultList.js')
router.get('/api/searchresultlist/:city/:keyword/:page', function *(next) {
    this.body = searchResultList
});

//商户信息
var detailInfo = require('./detail/DeatilInfo.js')
router.get('/api/detaildata/:id', function *(next) {
    this.body = detailInfo
});

//评论列表
var commentListData = require('./detail/Comment.js')
router.get('/api/comment/:id/', function *(next) {
    this.body = commentListData
});


// 订单列表
const orderList = require('./orderlist/orderList.js')
router.get('/api/orderlist/:username', function *(next) {
    const params = this.params
    const username = params.username
    console.log('订单列表-用户名：' + username)
    this.body = orderList
})

// 提交评论
router.post('/api/submitComment', function *(next) {
    console.log('提交评论')
    // 获取参数
    this.body = {
        errno: 0,
        msg: 'ok'
    }
})

app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3005);
console.log('Koa server is started');
