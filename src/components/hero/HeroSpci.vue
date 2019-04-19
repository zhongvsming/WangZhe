<template>
    <div class="container">
        <!-- 标题栏 -->
        <div class="titleImg">
              <img :src="hero.headImg" alt="图片无法显示">
        </div>      
        <!-- 英雄基本信息 -->
        <div class="baseInfo">
            <div class="title">
                 <span>{{hero.subName}}</span><button style="width:60px; background-color:yellow; margin:10px;">buy</button>
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
                <li v-for="item of hero.skill">
                    <div class="row">
                        <img :src="item.url" style="width:50px;">
                        <h3 >{{item.name}}</h3>
                    </div>    
                    <p>{{item.spic}}</p>
                </li>
            </ul>    
        </div>    

    </div>
</template>

<script>
    export default {
        name:'hero-spci',
        data(){
            return {
                // yao:{id:0,name:'瑶',
                // skill:[
                //     {name:'山鬼·白鹿',spic:'被动：瑶被鹿灵守护着，当被晕眩，击退，击飞等硬控技能击中会立刻解除控制并变成鹿灵6秒（除压制效果以外）每30秒最多触发一次；鹿灵状态将会获得无法被攻击但也失去自己攻击别人的能力，灵鹿静怡的灵光会持续照拂敌人，减速30%。', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/50500.png' },
                //     {name:'若有人兮',  spic:'举杖引魄击退身边的敌人，能量波向前飞行造成法术伤害，在快飞到终点前会检测范围内的英雄并化成第二段能量球跟踪打击造成法术伤害和0.75秒晕眩和显形效果。', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/50510.png'  },
                //     {name:'风飒木萧', spic:'瑶持续5秒自动打击身边随机的敌人，最多3个目标，每次攻击都会造成法术伤害，技能开启期间内无法普攻。', url:' https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/50520.png' },
                //     {name:'独立兮山之上', spic:'瑶附身到其他英雄，赋予附灵目标真实护盾（抵挡真实伤害），附身状态技能获得增强并且刷新所有技能冷却。附身状态：盾破会被击落下来进入CD，主动脱离附灵目标会返还50%冷却时间', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/50530.png'  }
                // ]
                // }
            }
        },
        props:[
            'hero'
        ]
    }
</script>

<style lang="scss" scoped>
    .container{
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
    .container::-webkit-scrollbar {
    display:none
    }
</style>