<template>
    <div class="yingdi-container">
        <!-- 标题栏 -->
        <!-- <div class="yingdi-title"> -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a  class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
			<h1 class="mui-title">爆料中心</h1>
		</header>
        <!-- </div>     -->
        <!-- 游戏工具 -->
        <div class="gametools">
            <!-- <h1 id="h11">游戏工具 战局掌握</h1> -->
            <img src="https://game.gtimg.cn/images/yxzj/cp/a20181201camp/text1.png">
            <img src="https://game.gtimg.cn/images/yxzj/cp/a20181201camp/p-img1.png">
        </div>    
        <!-- 资讯攻略 -->
        <div class="zixungonglue">
            <!-- <h1 id="h12">资讯攻略 一手get</h1> -->
            <img src="https://game.gtimg.cn/images/yxzj/cp/a20181201camp/text2.png">
            <img src="https://game.gtimg.cn/images/yxzj/cp/a20181201camp/p-img2.png">
        </div>    
        <!-- 营地社区 -->
        <div class="sociaty">
            <!-- <h1 id="h13">营地社区</h1> -->
            <img src="https://game.gtimg.cn/images/yxzj/cp/a20181201camp/text3.png">
            <img src="https://game.gtimg.cn/images/yxzj/cp/a20181201camp/p-img3.png">

        </div>
        <!--官方赛事 -->
        <div class="saishi">
            <!-- <h1 id="h14">官方赛事</h1> -->
            <img src="https://game.gtimg.cn/images/yxzj/cp/a20181201camp/text4.png">
            <img src="https://game.gtimg.cn/images/yxzj/cp/a20181201camp/p-img4.png">
        </div>   
        <!-- 二维码下载 -->
        <div class="download">

        </div>    


    </div>
</template>

<script>
    export default {
        name:'yingdi',
        methods: {
            back(){
                window.history.back()               
            }
        },
    }
</script>

<style lang="scss" scoped>
    .yingdi-container{
        background:black;
        height:100%;
        img{
            width:100%;
        }
        overflow:scroll;
    }
    .gametools{
        margin-top:60px;
        padding-bottom:30px;
    }
    .zixungonglue{
        padding-bottom:20px;        
    }
    .sociaty{
        padding-bottom:20px;        
    }
    .saishi{
        padding-bottom:20px;        
    }
    
    
</style>