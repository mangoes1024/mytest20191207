<template>
  <div>
    <title-header title="图片列表"></title-header>
    <div class="pic_contain">
      <ul>
        <li class="pic" v-for="pic in pics" :key=pic.authorid>
          <router-link :to="{name:'picdetail',query:{id:pic.first_cate_id}}">
            <img v-lazy="pic.book_cover" />
            <div class="mask">
              <p class="mui-ellipsis-2">
               {{pic.book_info}}
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pics: []
    };
  },
  created() {
    this.$axios.get('https://www.apiopen.top/novelApi')
      .then(res => {
        this.pics = res.data.data;
        // console.log(res);    
      });
  }
};
</script>
<style scoped>
ul {
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
}
.pic {
  position: relative
}
.pic img {
  width: 375px;
  height: 300px;

}
.pic .mask {
  position: absolute;
  height: 50px;
  line-height: 50px;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.pic p {
  color: #fff;
  line-height: 18px;
  margin-top: 3px;
}
image[lazy=loading] {
  width: 100%;
  height: 300px;
  margin: auto;
}
</style>