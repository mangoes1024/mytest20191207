<template>
    <div>
    <i v-on:click="goback" class="mintui mintui-back"></i>
   <span>
     {{title}}
   </span>
  
   
    </div>
</template>
<script>
export default {
    data (){
        return {

        }
    },
    props:[
      'title'
      ],
    methods:{
      goback() {
        this.$router.go(-1);
      }
    }
}
</script>
<style scoped>
    div {
      height: 40px;
      background: #FFF;
      line-height: 40px;
      
    }
    span {
      font-size: 15px;
      color: #333;
      padding-left: 130px;
      font-weight: 700;
    }
</style>
