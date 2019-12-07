<template>
  <div>
    <mt-header title="我的第一个Vue 项目"></mt-header>
    <router-view></router-view>
    <mt-tabbar>
      <router-link :to="{name:'home'}" class="tarbar mint-tab-item">
        <mt-tab-item id="首页">
          <img slot="icon" src="/src/static/images/home2@2x.png" />
          首页
        </mt-tab-item>
      </router-link>
      <router-link :to="{name:'member'}" class="tarbar mint-tab-item">
        <mt-tab-item id="会员">
          <img slot="icon" src="/src/static/images/member@2x.png" />
          会员
        </mt-tab-item>
      </router-link>
      <router-link :to="{name:'cart'}" class="tarbar mint-tab-item point">
        <mt-tab-item id="购物车">
          <img slot="icon" src="/src/static/images/cart@2x.png" />
           <mt-badge type="warning" size="small" v-if="isShow">{{num}}</mt-badge>
          购物车
        </mt-tab-item>
      </router-link>
      <router-link :to="{name:'search'}" class="tarbar mint-tab-item">
        <mt-tab-item id="查找">
          <img slot="icon" src="/src/static/images/search@2x.png" />
          查找
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
  </div>
</template> 
<script>
// 非父子组件传值，引入公共实例，作为中间仓库来传值
import Bus from './components/common/bus.js';
import cartTools from './components/common/cartTools.js';
export default {
  data() {
    return {
        num:cartTools.setProdsNum(),
        isShow:false,
    };
  },
  mounted(){
      
   Bus.$on('addCart',data => {
       this.num=this.num+data
       if(this.num>=1){
           this.isShow=true
      }
   });
   
  },
  methods: {
  }
};
</script>
<style scoped>
.point {
    position: relative;
}
.mint-badge {
    position: absolute;
    top: 2px;
    right: 16px;

}
</style>