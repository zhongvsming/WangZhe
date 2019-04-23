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
            <p style="text-align: center"><iframe class="video_iframe" style="z-index:1;" src="https://apd-32fa08de03a52878e3584cb5fcbefb26.v.smtcdns.com/om.tc.qq.com/AhuHRZWRqPUaOqp7xP3jLvee8zEicyFwSeIstVkfeQNk/uwMROfz0r5zEYaQXGdGnC2dfJ6luU4SvDHGu4O_i_TA7Xarv/a076088ej4z.p701.1.mp4?sdtfrom=v1010&guid=9eb1c3bd47d961a1f0b788d370508aa4&vkey=0F6FD5871959BD8131AC2503B53CFA168923DC0E095C32F09E439349E3DAF6F09FFDADA139EDD3D790D17BA3A52AAE48D7AE853ED3CA0A280EB454840ADB2BF122E65936DB114F3F508FE79A5D4040FBF60D7F0A663EA6198C304F6FE292EA277AD287CB41B66FE1D9B2DAB74D54F605E0993FFD79DBEAA9&amp;width=500&amp;height=375&amp;auto=0" allowfullscreen="" frameborder="0" height="375" width="100%"></iframe></p>
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