<template>
    <div class="agreement-container">
        <!-- title栏 -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
			<h1 class="mui-title">用户协议</h1>
		</header>
        <!-- 图片 -->
        <div class="picture"><img src="http://img.zcool.cn/community/01b08f584f9405a8012060c886ef20.jpg" style="width:100%"></div>
        <hr>
        <!-- 文字区域 -->
        <div class="textarea1">
            <h1>欢迎使用王者永耀软件及相关服务</h1>
            <p>首页有王者永耀各种最新资讯，英雄里详细介绍了各英雄能力指数与技能详解。英雄每个技能都有详细说明，并附上图片。同时购买英雄提供各种优惠。</p>
            <p>游戏只是娱乐，切勿沉迷。</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'agreement',
        methods: {
            back(){
                window.history.back()
            }
        },
    }
</script>

<style lang="scss" scoped>
    .agreement-container{
        position:absolute;
        width:100%;
        height:100%;
    }
    .picture{
        width:90%;
        margin:60px auto 10px auto;
    }
    .textarea1{
        padding:10px;
        h1{
            padding:10px;
        }
        p{
            padding:10px;
        }
    }
</style>