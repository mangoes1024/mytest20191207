<template>
  <div class="tembottom">
    <title-header title="图片详情"></title-header>
    <div>
      <ul>
        <li v-for="title in titles" :key="title" class="tit">{{title}}</li>
      </ul>
      <div>
        <img class="preview-img" :src="randompic.url" @click="$preview.open(index, imgs)" />
      </div>
      <div class="comments">
        <textarea cols="30" rows="4"></textarea>
        <mt-button type="primary" size="large">提交评论</mt-button>
        <ul class="commen_list">
          <li v-for="(comment,index) in comments" :key="index">
            <span v-text="comment.username"></span>
            <p class="mui-ellipsis">{{comment.text}}</p>
          </li>
          <p class="more" @click="loadByPage">查看更多</p>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      titles: [],
      randompic: {},
      comments: [],
      pageIndex: 1
    };
  },
  created() {
    let id = this.$route.query.id;
    this.$axios
      .get("https://www.apiopen.top/novelSearchApi?name=" + id)
      .then(res => {
        this.titles = res.data.data;
        // console.log(res)
      })
      .catch(error => {
        console.log(error);
      });
    this.$axios
      .get("https://source.unsplash.com/random/" + id * id)
      .then(res => {
        console.log(res);
        this.randompic = res.config;
        this.randompic.forEach(ele => {
          ele.w = 300;
          ele.h = 300;
        });
      })
      .catch(error => {});
    this.loadFirst();
  },
  methods: {
    loadFirst() {
      this.$axios
        .get("https://www.apiopen.top/satinGodApi?type=1&page=1")
        .then(res => {
          this.comments = res.data.data;
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
        loadByPage() {
       this.$axios
          .get('https://www.apiopen.top/satinGodApi?type=1&page='+(++this.pageIndex))
          .then(res => {
            this.comments = this.comments.concat(res.data.data);
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
        }
  }
};
</script>
<style scoped>
.tit {
  height: 40px;
  line-height: 40px;
  margin-top: 6px;
  padding-left: 16px;
  background: #dcdcdc;
}
img {
  width: 100%;
  height: 180px;
}
.comments {
  padding: 10px 16px;
}
textarea {
  border: 0;
  font-size: 12px;
  resize: none;
}
li {
  height: 30px;
  /* line-height: 18px; */
  /* text-align: center; */
  /* font-size: 13px; */
  margin-top: 20px;
}
li span {
  font-size: 6px;
  /* -webkit-text-size-adjust: none; */
  color: #999;
}
li p {
  font-size: 13px;
  color: #666;
  text-align: center;
}
.more {
  color: orangered;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
}
</style>