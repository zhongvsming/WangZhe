<template>
    <div class="saishi-container">
        <!-- 标题栏 -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
			<h1 class="mui-title">赛事专区</h1>
		</header>
        <img src="http://imgnews.mumayi.com/file/2019/03/07/smalla7c3f1f1db6a51bfaa88b5edbdd047e51551929963.jpg">
        <!-- 直播 -->
        <div class="live">
            <h1>直播</h1>
            <p>LIVE</p>
            <p style="text-align: center"><iframe class="video_iframe" style="z-index:1;" src="http://43.243.244.26/variety.tc.qq.com/Ag6IrZvd6w6MgKJ058MeNu37_n05Mpbo6t0sGOYHtJqo/p020184d79o.p201.1.mp4?fmt=shd&sdtfrom=&platform=10201&vkey=FC0B404433FDBC04851C05F0B2210D512C454C8631388A626E1285850AA39B7801A3F55D49A3458825CABE29E49953AEB18429F6ECF497EFF6EF43FE7641A650F3B2A6ABF8078990189B2B340B62AE6D4ADDB84F724107D4CEF5E913831ADE65548F13D2CE8E5F7C572E55B9A6101C5E4B0D40B7E1C6730B&level;=0&amp;width=500&amp;height=375&amp;auto=0" allowfullscreen="" frameborder="0" height="375" width="100%"></iframe></p>
        </div>    
        <!-- 赛程 -->
        <!-- <div class="saicheng">
            <h1>赛程</h1>
            <p>SCHEDULE</p>
        </div>     -->
    </div>
</template>

<script>
    export default {
        name:'saishi',
        methods: {
            back(){
                window.history.back()
            }
        },
    }
</script>

<style lang="scss" scoped>
    .saishi-container{
        height:100%;
        overflow-x:scroll;
        background:black;
        img{
            width:100%;
        }
    }
    .live{
        h1{
            padding:5px;
            color:white;
            font-weight:600;
        }
        p{
            padding:5px;
            color:white;
        }
    }
</style>