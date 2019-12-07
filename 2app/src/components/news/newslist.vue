<template>
    <div>
       <title-header title="新闻列表"></title-header>
       <div>
           <ul class="mui-table-view news_content">
				<li  v-for="(item,index) in news" :key="index" class="mui-table-view-cell mui-media" >
					<router-link :to="{name:'newsdetail',query:{docid:item.docid}}">
						<img class="mui-media-object mui-pull-left" :src="item.picInfo[0].url">
						<div class="mui-media-body">
							{{item.title}}
							<p class="mui-ellipsis">{{item.digest}}</p>
                            <span v-text="item.ptime"></span>
                            <span class="source">来源:{{item.source}}</span>
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
            news:[]
        }
    },
    created()
{
    this.$axios.get('https://www.apiopen.top/journalismApi')
    .then(res=>{
        this.news=res.data.data.sports;
        console.log(res)
    })
    .catch(error=>{
        console.log(error)
    })
}}
</script>
<style  scoped>
    .mui-media-body span{
        font-size: 12px;
        color: #bcbcbc;
    }
    span.source {
        padding-left: 100px;
        color: orangered;
        opacity: 0.6;
    }
   .news_content {
       margin-bottom: 50px;
    }
</style>