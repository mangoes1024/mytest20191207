<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <a href="#">
          <img src="/src/static/images/1.png" alt />
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#">
          <img src="/src/static/images/2.png" alt />
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#">
          <img src="/src/static/images/3.png" alt />
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link :to="{name:'newslist'}">
            <div class="jgq">
              <img src="/src/static/images/news.png" alt />
            </div>
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <router-link :to="{name:'picshare'}">
            <div class="jgq">
              <img src="/src/static/images/picShare.png" alt />
            </div>
            <div class="mui-media-body">图文分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-4">
          <router-link :to="{name:'productlist'}">
            <div class="jgq">
              <img src="/src/static/images/goodShow.png" alt />
            </div>
            <div class="mui-media-body">商品展示</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <div class="jgq">
              <img src="/src/static/images/feedback.png" alt />
            </div>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <div class="jgq">
              <img src="/src/static/images/search.png" alt />
            </div>
            <div class="mui-media-body">搜索资讯</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
          <a href="#">
            <div class="jgq">
              <img src="/src/static/images/callme.png" alt />
            </div>
            <div class="mui-media-body">练习我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
.mui-grid-view.mui-grid-9 {
  background-color: #f7f7f7;
}
.mui-content > .mui-table-view:first-child {
  margin-top: 0;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}

.jgq {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 21px;
}
.jgq img {
  width: 44px;
}
</style>
