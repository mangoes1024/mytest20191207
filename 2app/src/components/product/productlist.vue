<template>
  <div>
    <title-header title="商品列表"></title-header>
    <div class="main">
      <mt-loadmore
        :bottom-method="loadBottom"
        :bottom-all-loaded="allLoaded"
        :autoFill="isAutoFill"
        ref="loadmore"
      >
        <ul>
          <li v-for="(proud,index) in prouds" :key="index">
            <router-link  :to="{name:'productbuy'}">
              <img :src="proud.pic_big" alt />
              <span>{{proud.title}}</span>
            </router-link>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prouds: [],
      type: 1,
      allLoaded: false,
      isAutoFill: false
    };
  },
  created() {
    this.$axios
      .get("https://api.apiopen.top/musicRankingsDetails?type=1")
      .then(res => {
        this.prouds = res.data.result;
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    loadBottom() {
      // 加载更多数据
      //   console.log('上啦触发聊');
      this.$axios
        .get("https://api.apiopen.top/musicRankingsDetails?type=" + (++this.type))
        .then(res => {
          this.prouds = this.prouds.concat(res.data.result);
          if (res.data.result.length != 9) {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
/* .products {
  width: 100%;
} */
.main {
  overflow: scroll;
  height: 537px;
}
ul {
  width: 100%;
  padding: 0 16px;
  overflow: hidden;
}
ul li {
  float: left;
  width: 50%;
  height: 205px;
  margin-top: 16px;
}
ul li:nth-child(odd) {
  padding-right: 6px;
}
ul li:nth-child(even) {
  padding-left: 6px;
}
ul li a {
  width: 100%;
  height: 100%;
  display: block;
  background: pink;
  overflow: hidden;
  position: relative;
  left: 0;
  top: 0;
  box-shadow: 0 0 1px #cccccc;
}
ul li a img {
  width: 100%;
  height: 100%;
}
ul li a span {
  position: absolute;
  width: 100%;
  height: 40px;
  background: #dcdcdc;
  left: 0;
  bottom: 0;
  line-height: 40px;
  text-align: center;
}
</style>