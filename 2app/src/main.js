/*jshint esversion: 6 */ 
'user strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'mint-ui/lib/index.js';
import 'mint-ui/lib/mint-ui.common.js';
import 'vue/dist/vue.js';
Vue.use(Mint);
import './static/vender/mui/dist/css/mui.css';


//引入axios插件
import Axios from 'axios';
//把Axios设置成全局组件
Vue.prototype.$axios = Axios;

//设置axios的拦截器功能
Axios.interceptors.request.use(config=>{
    Mint.Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
    return config;
});
Axios.interceptors.response.use(response=>{
    Mint.Indicator.close();
    return response;
});
//引入vuepreviev 插件 图片查看器
import VuePreview from 'vue-preview';
Vue.use(VuePreview);
//引入全局样式样式
import './static/css/common.css';
//引入自己的Vue文件
import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Cart from './components/cart/cart.vue';
import Search from './components/search/search.vue';
import Newslist from './components/news/newslist.vue';
import NewsDetail from './components/news/newsdetail.vue';
import PicShare from './components/picshare/picshare.vue';
import PicDetail from  './components/picshare/picdetail.vue';
import ProductList from  './components/product/productlist.vue';
import ProductBuy from './components/product/productbuy.vue';

//引入全局组件
import TitleHeader from './components/titleheader/titleheader.vue';
//注册全局组件
Vue.component('titleHeader',TitleHeader);

const router =new VueRouter({
        linkActiveClass: 'is-active',
        routes:[
            {path:'/', redirect:{name:'home'}},
            {name:'home', path:'/home',component:Home},
            {name:'member', path:'/member',component:Member},
            {name:'cart', path:'/cart',component:Cart},
            {name:'search', path:'/search',component:Search},
            {name:'newslist',path:'/newslist',component:Newslist},
            {name:'newsdetail',path:'/newslist/newsdetail',component: NewsDetail},
            {name:'picshare',path:'/picshare',component:PicShare},
            {name:'picdetail',path:'/picshare/picdetail',component:PicDetail},
            {name:'productlist',path:'/product/productlist',component:ProductList},
            {name:'productbuy',path:'/product/productbuy',component:ProductBuy}



        ]
});


new Vue({
    el:'#app',
    router:router,
    render:c=>c(App)
});
