<template>
    <div>
        <title-header title="新闻详情"></title-header>
    </div>
</template>
<script>
export default {
    data (){
        return {
           
        }
    },
    created(){
        let docid=this.$route.query.docid
       this.$axios.get('https://www.apiopen.top/journalismApi'+ docid)
      .then(res=>{
            // console.log(res)
      })
    }
}
</script>
<style >
    
</style>