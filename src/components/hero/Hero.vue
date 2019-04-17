<template>
    <div class="container">

        <!-- 顶部title -->
        <div class="titleBar">
           <span>全部英雄</span>
        </div>    

        <div class="content">
            <!-- 侧边导航栏 -->
            <div class="navMenu">
<!--侧滑菜单部分-->
			<aside id="offCanvasSide" class="mui-off-canvas-left">
				<div id="offCanvasSideScroll" class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<div class="title">侧滑导航</div>
						<div class="content">
							这是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; 3.点击如下红色按钮
							<span class="android-only">；4.Android手机按back键；5.Android手机按menu键
							</span>。
							<p style="margin: 10px 15px;">
								<button id="offCanvasHide" type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">关闭侧滑菜单</button>
							</p>

						</div>
						<div class="title" style="margin-bottom: 25px;">侧滑列表示例</div>
						<ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 1
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 2
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 3
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 4
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 5
								</a>
							</li>
							<li class="mui-table-view-cell">
								<a class="mui-navigate-right">
									Item 6
								</a>
							</li>
						</ul>
					</div>
                    				</div>
			</aside>
            </div>   


            <!-- 内容区域 -->
            <div class="main">
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
                ]
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

<style lang="scss" scoped>
    .titleBar{
        height:35px;
        text-align:center;
        background-color:#000;
        color:gold;

        span{
        line-height:35px;
        }
    }
    .content{
        // display:flex;
        // background:#000;
    
        .main{
            margin-left:10px;
            border:1px red solid;
            // background:#fff;
        }
        .navMenu{
 
        }
    }


</style>