<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;" class>
          <div class="box">
            <input type="checkbox" class="check_box" id="check_box" v-model="isSelected"/>
            <label for="check_box"  :class="{'change':display}"></label>
          </div>
          <div class="content">
            <img class="mui-media-object mui-pull-left" src="/src/static/images/callme.png" />
            <div class="mui-media-body">
              幸福
              <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            </div>
          </div>
          <div class="buysome">
            <span class="reduce">-</span>
            <input type="textarea" v-model="num" />
            <span class="plus">+</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isSelected: true,
      num: 1,
       display: true
    };
  },
  methods: {
    cli() {
     if(this.isSelected == false){
         this.display==false
        //    this.$ref.inbox.style.border='1px solid orangered'
        //    this.$ref.inbox.style.background='none'
     }else{
         display:true
     }
    
    }
  }
};
</script>
<style scoped>
a {
  position: relative;
  height: 100px;
}
.box {
  position: absolute;
  width: 20px;
  height: 20px;
  left: 16px;
  top: 24px;
}
.content {
  position: absolute;
  left: 46px;
  top: 14px;
}
#check_box[type="checkbox"] {
  visibility: hidden;
}

#check_box:checked +label {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  border: 0;
  background: url("/src/static/images/选中.png") no-repeat;
  background-size: 20px 20px;
}
.change {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  border: 1px solid orangered;
 
}
.buysome {
  width: 113px;
  height: 30px;
  margin-top: 60px;
  margin-left: 240px;
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

</style>
