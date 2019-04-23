<template>
    <div class="herospci-container">
        <!-- 标题栏 -->
        <div class="titleImg">
              <img :src="hero.headImg" alt="图片无法显示">
        </div>      
        <!-- 英雄基本信息 -->
        <div class="baseInfo">
            <div class="title">
                 <span>{{hero.subName}}</span>
                  <button @click="showBall()">{{hero.price+' buy'}}
                 </button> 
            </div>    
            <h1>{{hero.name}}</h1> 
            <ul>
                <li><em>生存能力</em><el-progress :percentage="hero.life"></el-progress></li>
                <li><em>攻击伤害</em><el-progress :percentage="hero.ack"></el-progress></li>
                <li><em>技能效果</em><el-progress :percentage="hero.ski"></el-progress></li>
                <li><em>上手难度</em><el-progress :percentage="hero.dif"></el-progress></li>
            </ul>    
        </div>    
        <!-- 英雄技能 -->
        <div class="skill">
            <ul>
                <li v-for="item of hero.skill" :key="item.name">
                    <div class="row">
                        <img :src="item.url" style="width:50px;">
                        <h3 >{{item.name}}</h3>
                    </div>    
                    <p>{{item.spic}}</p>
                </li>
            </ul>    
        </div>    
        <!-- 购物车动画圆点 -->
        <transition  
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-bind:css="false"> 
             <div ref="ball" class="ball" v-show="ballShow" id="ball"></div>
        </transition >    

    </div>
</template>

<script>
    export default {
        name:'hero-spci',
        data(){
            return {
                ballShow:false
            }
        },
        props:[
            'hero'
        ],
        methods:{
            beforeEnter(el){
                // console.log('before enter')
                el.style.transform="translate(0,0)";
            },
            enter(el,done){
                const ballPosition = document.getElementById("ball").getBoundingClientRect();
                const badgePosition = document.getElementById("badge").getBoundingClientRect();
                const xDist = badgePosition.left-ballPosition.left;
                const yDist = badgePosition.top-ballPosition.top;
            
                el.offsetWidth;
                el.style.transform=`translate(${xDist}px,${yDist}px)`;                    
                el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)";
                done()
            },
            afterEnter(el){
                // console.log('after enter')
                
                this.ballShow=!this.ballShow
                this.buy()
            },
            showBall(){
                // console.log('button click')
                this.ballShow=!this.ballShow
            },
            buy(){
                // console.log('method buy active')
                if(!this.$store.getters.isHasItem(this.hero.id)){
                    var buyHero = {id:this.hero.id,name:this.hero.name,subName:this.hero.subName,headImg:this.hero.headImg,price:this.hero.price,selected:false,num:1}
                    this.$store.commit('addToCart',buyHero)
                }else{
                    this.$store.commit('addOne',this.hero.id)
                }
               
            },

        },
        computed: {

        },
    }
</script>

<style lang="scss" scoped>
    .herospci-container{
        // height:100%;
        // position:relative;
        .titleImg{
            // width:100%;
            height:150px;
            // border:red 1px solid;
            img{
                width:100%;
                height:100%;
            }
        }
        .baseInfo{
            padding-bottom:10px;
            .title{
                display:flex;
                justify-content: space-between;
            }
            span{
                color:gold;
               font-size:1.4em;
               padding:10px;
            }
            h1{
                padding-left:15px;
                padding-bottom:5px;
            }
            ul{
                margin:0 10px;
            }
            button{
                width:70px;
                margin:10px;
                color:orange;
                position:relative;
            }
            .btnClass{
                background-color:yellow;
            }
        }
        .skill{
            margin:0 10px;
            padding-bottom:60px;
            .row{
                margin:0 5px;
                display:flex;
                justify-content:space-between;
                height:50px;
            }
            h3{
                line-height:50px;
            }
        }
    }
        // .container::-webkit-scrollbar {
        // display:none
        // }
        .ball{
                width:13px;
                height:13px;
                background:red;
                border-radius:50%;
                padding:0;
                position:absolute;
                left:87%;
                top:32%;
                z-index:99;
            }
</style>