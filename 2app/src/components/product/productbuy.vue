<template>
  <div>
    <title-header title="商品购买"></title-header>
    <div class="lunbo">
      <ul>
        <li>
          <img :src="prodinfo.thumbnail" alt />
        </li>
      </ul>
      <div class="des">
        <p class="mui-ellipsis">{{prodinfo.text}}</p>
      </div>
      <div class="buysome">
        <span class="reduce" v-on:click="reduce">-</span>
        <input type="textarea" v-model="num" />
        <span class="plus" v-on:click="plus">+</span>
      </div>
      <div class="price">
        <span class="money">&yen;334</span>
      </div>
      <div class="buttons">
        <mt-button type="primary" size="small" @click="addcart">加入购物车</mt-button>
        <mt-button type="danger" size="small">立即购买</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
// 非父子组件传值，引入公共实例，作为中间仓库来传值
import Bus from "../common/bus.js";
import cartTools from '../common/cartTools.js';
export default {
  data() {
    return {
      num: 1,
      prodinfo: {},
      id:1
    };
  },
  created() {
    this.$axios
      .get("https://api.apiopen.top/getSingleJoke?sid=28654780")
      .then(res => {
        this.prodinfo = res.data.result;
        
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    reduce() {
      if (this.num > 1) {
        this.num--;
      }
    },
    plus() {
      if (this.num < 20) {
        this.num++;
      }
    },
    addcart() {
    //   console.log(this.num);
      Bus.$emit("addCart", this.num);
      cartTools.addOrUpdate({
              id:JSON.parse(this.prodinfo.comment),
              num:this.num
          });
console.log(cartTools.getProds())
    }
  }
};
</script>
<style scoped>
.lunbo {
  width: 100%;
  height: 200px;
}
.lunbo ul {
  width: 100%;
  height: 100%;
}
.lunbo ul li {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.des {
  width: 100%;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fff;
}
.des p {
  font-size: 15px;
  color: #333;
  margin: 0;
}
.buysome {
  width: 113px;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  float: left;
}
.price {
  float: right;
  width: 80px;
  height: 30px;
  margin-top: 10px;
}
.price .money {
  font-size: 18px;
  color: orangered;
 margin-right: 30px;
  display: block;
  width: 100%;
  background: none;

}
span {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  float: left;
  background: #f1f2f3;
  color: #666;
  font-size: 20px;
  font-weight: 700px;
}
input {
  width: 35px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  float: left;
  background: #dcdcdc;
  border: 0;
  margin-left: 1px;
  border-radius: 0;
  font-size: 14px;
}
.plus {
  margin-left: 1px;
}
.buttons {
  float: right;
  margin-top: 70px;
  margin-right: 16px;
}
</style>