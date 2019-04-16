<template>
    <div>
        <!-- 轮播图 -->
        <div class="banner">
            <el-carousel height="150px">
                 <el-carousel-item v-for="item in bannerUrl" :key="item.url">
                    <img :src="item.url" alt="图片无法显示">
                  </el-carousel-item>
            </el-carousel>
        </div>    

        <!-- 卡片区域 -->
        <div class="cards">
            <div class="cards-row1">
                <img src="https://ossweb-img.qq.com/upload/webplat/info/yxzj/20190305/969081063248726.jpg" alt="图片无法显示">
                <img src="https://ossweb-img.qq.com/upload/webplat/info/yxzj/20181210/86638782789061.jpg" alt="图片无法显示">

            </div>
            <div class="cards-row2">
                <img src="https://ossweb-img.qq.com/upload/webplat/info/yxzj/20181210/49934964177020.jpg" alt="图片无法显示">
                <img src="https://ossweb-img.qq.com/upload/webplat/info/yxzj/20190305/58993377293822.jpg" alt="图片无法显示">
            </div>
        </div>    

        <!-- 新闻列表区 -->
        <div class="news-list">
             <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="新闻" name="first">
                    <ul>
                        <li v-for="item of gongGao" :key="item.id"><p>{{item.title}}</p></li>
                    </ul>    
                </el-tab-pane>
                <el-tab-pane label="公告" name="second">
                    <ul>
                        <li v-for="item of xinWen" :key="item.id"><p>{{item.title}}</p></li>
                    </ul>  
                </el-tab-pane>
                <el-tab-pane label="活动" name="third">
                    <ul>
                        <li v-for="item of huoDong" :key="item.id"><p>{{item.title}}</p></li>
                    </ul>  
                </el-tab-pane>
                <el-tab-pane label="赛事" name="fourth">
                    <ul>
                        <li v-for="item of xinWen" :key="item.id"><p>{{item.title}}</p></li>
                    </ul>  
                </el-tab-pane>
            </el-tabs>


        </div>    

    </div>
</template>

<script>
    export default {
        name:'home',
        data(){
            return {
                bannerUrl:[
                    {url:'https://game.gtimg.cn/upload/adw/image/20190415/caa9a12c046680fc4eb52fae058d0f98.jpg'},
                    {url:'https://game.gtimg.cn/upload/adw/image/20190416/3eae2ef0f5640d25a49a3b3876fe5d60.jpg'},
                    {url:'https://game.gtimg.cn/upload/adw/image/20190416/6f790ce3651f934b69687a1e4c38425f.jpg'},
                    {url:'https://game.gtimg.cn/upload/adw/image/20190416/40ae92edf3a682394525a1967dbe26c6.jpg'}
                ],
                gongGao:[
                    {id:1,title:'4月16日【正式服】“万物有灵”版本更新公告'},
                    {id:2,title:'iOS系统要求及升级指引公告'},
                    {id:3,title:'【正式服】“万物有灵”版本异常问题说明'},
                    {id:4,title:'S15赛季4月16日开启 海量福利助战新赛季'},
                    {id:5,title:'安卓更新相关问题指引'},
                    {id:6,title:'iOS更新相关问题指引'},
                    {id:7,title:'4月16日全服不停机优化公告'},
                    {id:8,title:'4月16日体验服停机更新公告'},
                    {id:9,title:'关于4月12日QGhappy对阵GK比赛期间竞猜开奖异常的公告'},
                    {id:10,title:'4月12日体验服停机更新公告'}
                ],
                xinWen:[
                    {id:1,title:'急哟！国服第一李白“剑仙”摆擂一缺四，诚邀你加入战队！'},
                    {id:2,title:'万物有灵X各大直播平台 新版本初体验开启'},
                    {id:3,title:'新版本一分钟大盘点，情报福利两不误！'},
                    {id:4,title:'峡谷爆料师 | 抢先体验版本、成为人气大V，你心动了吗？ 海量福利助战新赛季'},
                    {id:5,title:'还原最真实的兰陵王， 300多个日夜诚意之作'},
                    {id:6,title:'新版本爆料第④弹丨英雄练习新去处，荣耀历史秀出来！'},
                    {id:7,title:'腾讯首款AR探索手游《一起来捉妖》今日上线'},
                    {id:8,title:'王者荣耀官方入驻百家号啦！'},
                    {id:9,title:'新皮肤爆料 | 点击这篇图文的人，手机都蓝屏了！'},
                    {id:10,title:'新版本爆料第③弹丨语音、BP双管齐下，开黑交流零距离~'}
                ],
                huoDong:[
                    {id:1,title:'赛末冲刺！荣耀之路活动福利来袭！'},
                    {id:2,title:'急哟！国服第一李白“剑仙”摆擂一缺四，诚邀你加入战队！'},
                    {id:3,title:'【鹿灵少女的邀约】活动公告'},
                    {id:4,title:'踏青之旅活动周开启'},
                    {id:5,title:'刺客国服第一鹿死谁手'},
                    {id:6,title:'【萌系养成 峡谷莹之森】活动FAQ'},
                    {id:7,title:'萌系养成活动开启公告'},
                    {id:8,title:'王者荣耀官方入驻百家号啦！'},
                    {id:9,title:'达摩-黄金狮子座登场 全新活动开放'},
                    {id:10,title:'春风拂面 荣耀常在 峡谷春分献好礼'}
                ],
                activeName: 'second'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
           }
        }
    }
</script>

<style lang="scss">
    .banner{
        img{
            width:100%;
            height:100%;
        }
    }
    .cards{
        width:98%;
        margin:0 auto;
        .cards-row1{
            display:flex;
            justify-content:space-around;
            margin-top:5px;
        }
        .cards-row2{
             display:flex;
            justify-content:space-around;
            margin-top:5px;

        }
        img{
            // width: 85%;
            width: 47%;
            height:100px;
            // box-shadow: 5px 5px 5px #888888;
            border-radius: 8px;
        }
    }
    .news-list{
        width:90%;
        margin:0 auto;
        ul{
            list-style:none;
            padding:0;
        }
        li{
            border-bottom:1px solid rgba(50,50,50,0.5);
        }
        .el-tabs__item{
            font-size:100%;
        }
        .el-tabs__header{
            margin:5px 0 0 0;
        }
        p{
             white-space:nowrap;
             overflow: hidden;
             text-overflow: ellipsis;
        }
    
    }
</style>