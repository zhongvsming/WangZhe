<template>
    <div class="artical-container">
        <!-- 标题栏 -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
			<h1 class="mui-title">文章</h1>
		</header>
        <div class="content">
            数据无法获取
        </div>    
    </div>
</template>

<script>
    export default {
        name:'artical',
        methods: {
            back(){
                window.history.back()
            }
        },
    }
</script>

<style lang="scss" scoped>
    .artical-container{
        height:100%;
        overflow-x:scroll;
    }
    .content{
        width:100%;
        margin-top:60px;
        img{
            width:100%;
        }
    }
</style>