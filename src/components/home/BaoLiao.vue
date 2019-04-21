<template>
    <div class="baoliao-container">

        <!-- title栏 -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
			<h1 class="mui-title">爆料中心</h1>
		</header>

        <!-- 新英雄 -->
        <div class="baoliao-new-hero">
            <h1>新英雄</h1>
            <hr>
            <img src="http://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20181129/af32acea23857933016334a417e69681.jpg" alt="图片无法显示">
            <h2 style="display:inline-block">鹿守灵心</h2><router-link to="/hero">查看英雄</router-link>
            <h2>瑶</h2> 
            <p>上线时间：2019.04.16</p>
            <img src="http://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20190404/f0b2df64b5c49c7df0c7c56db954561f.gif" alt="图片无法显示">
         </div>

        <!-- 新皮肤 -->
         <div class="baoliao-new-skin">   
            <h1>新皮肤</h1>
            <img src="http://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20190406/adbcfb55613505b5fa93fa7bfd04e439.jpg" alt="图片无法显示">
            <h2>典韦</h2>
            <h2>蓝屏警告</h2> 
            <p>上线时间：2019.04.16</p>
            <img style="padding-bottom:50px;" src="http://game.gtimg.cn/images/yxzj/zlkdatasys/images/image/20190406/15e3a800f5f60133d1847a11ed948ee2.gif" alt="图片无法显示">

         </div>

        <!-- 英雄调整 -->
        <div>

        </div>    

    </div>
</template>

<script>
    export default {
        name:'baoliao',
        methods: {
            back(){
                window.history.back()
            }
        },
    }
</script>

<style lang="scss" scoped>
    .baoliao-container{
        height:100%;
        overflow:scroll;
        img{
            width:100%;
        }
        
    }
    // .mui-bar{
    //     position:static;
    // }
    // .mui-bar-nav{
    //     background:#222;
    //     h1{
    //        color:gold;
    //     }
    // }
    .baoliao-new-hero{
        margin-top:60px;
        padding-bottom:10px;
        // border-bottom:1px black solid;
        h1{
            text-align:center;
            padding:5px;
            color:#b98c52;
        }
        h2{
            padding:5px;
            color:#b98c52;
        }
        h1:before, h1:after {
            content: "";
            display: inline-block;
            width: 50%;
            margin: 0 .5em 0 -55%;
            vertical-align: middle;
            border-bottom: 1px solid;
            }
        h1:after {
            margin: 0 -55% 0 .5em;
            }    
    }
    .baoliao-new-skin{
        margin-top:10px;
        padding-bottom:10px;
        border-bottom:1px black solid;
       h1{
            text-align:center;
            padding:5px;
            color:#b98c52;
        }
        h2{
            padding:5px;
            color:#b98c52;
        }
        h1:before, h1:after {
            content: "";
            display: inline-block;
            width: 50%;
            margin: 0 .5em 0 -55%;
            vertical-align: middle;
            border-bottom: 1px solid;
            }
        h1:after {
            margin: 0 -55% 0 .5em;
            }   
    }
</style>