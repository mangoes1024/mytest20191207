<template>
  
  

  <div>
     	<mt-checklist 
          title="复选框列表"
		v-model="value" 
		:options="options">
		</mt-checklist>
  </div>

</template>
<script>
export default {
    data (){
        return {
            value:[],
			//checklist设置
			options : [
			{
		    label: '选项a',
		    value: 'a',
			},
			{
		    label: '选项b',
		    value: 'b'
			},
			{
		    label: 'c',
		    value: 'c'
			}]

        }
    }
};
</script>
<style lang="">
</style>