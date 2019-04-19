<template>
    <div class="hero-container">


        <!-- 顶部title -->
        <div class="hero-title">
           <span>全部英雄</span>
        </div>    

        <div class="hero-main">
             <Button@click="value2 = true"  style="width:50px;position:fixed;left:0;top:50%; opacity:0.4;"><span class="mui-icon mui-icon-arrowright"></span></Button>

            <!-- 侧边导航栏 -->
            <div class="hero-nav">
                <Drawer title="Heros" placement="left" :closable="false" v-model="value2" width="160px" class="drawer">
                    <ul>
                        <li v-for="item of heros" :key="item.id">
                            <img class="imgClass" :src="item.url" alt="图片无法显示" width="50px" height="50px"><span>{{item.name}}</span>
                        </li>    
                    </ul>
                </Drawer>
            </div>   

            <!-- 内容区域 -->
            <div class="hero-content">
                <router-view></router-view>
            </div>    
        </div>    




    </div>
</template>

<script>
    export default {
        name:'hero',
        data(){
            return {
                isCollapse: true,
                heros:[
                    {id:1,name:'瑶',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg'},
                    {id:2,name:'盘古',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg'},
                    {id:3,name:'猪八戒',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg'},
                    {id:4,name:'嫦娥',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg'},
                    {id:5,name:'上官婉儿',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg'},
                    {id:6,name:'李信',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg'},
                    {id:7,name:'沈梦溪',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg'},
                    {id:8,name:'伽罗',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg'},
                    {id:9,name:'盾山',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg'},
                    {id:10,name:'司马懿',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg'},
                    {id:11,name:'孙策',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg'},
                    {id:12,name:'元歌',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg'},
                    {id:13,name:'米莱迪',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg'},
                    {id:14,name:'狂铁',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg'},
                    {id:15,name:'异星',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg'}
                ],
                value2: false
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
         }
    }
</script>

<style lang="scss" >
// .hero-container::-webkit-scrollbar {display:none}
 .hero-title{
        width:100%;
        height:35px;
        text-align:center;
        background-color:#000;
        color:gold;
        position:fixed;
        z-index:1;
        span{
        line-height:35px;
        }
    }
 .hero-main{
    //    position:relative;
        padding-top:35px;
    }

.drawer{
    li{
       list-style:none;
    }
    ul li img{
        vertical-align:middle;
    }
    span{
        margin-left:10px;
        font-size:1.3em;
        color:black;
    }
}
.ivu-drawer-body::-webkit-scrollbar {
    display:none
    }


</style>