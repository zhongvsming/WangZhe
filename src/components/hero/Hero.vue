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
                        <li v-for="item of heros" :key="item.id" @click="activeClass(item.id)" :class="[activeIndex==item.id?'hero-li-acitve':'']">
                            <img class="imgClass" :src="item.url" alt="图片无法显示" width="50px" height="50px"><span>{{item.name}}</span>
                        </li>    
                    </ul>
                </Drawer>
            </div>   

            <!-- 内容区域 -->
            <div class="hero-content">
                <hero-spci :hero="heroData[activeIndex]"></hero-spci>
            </div>    
        </div>    

    </div>
</template>

<script>
    import HeroSpci from './HeroSpci.vue'
    export default {
        name:'hero',
        data(){
            return {
                isCollapse: true,
                heros:[
                    {id:0,name:'瑶',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg'},
                    {id:1,name:'盘古',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg'},
                    {id:2,name:'猪八戒',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg'},
                    {id:3,name:'嫦娥',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg'},
                    {id:4,name:'上官婉儿',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg'},
                    {id:5,name:'李信',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg'},
                    {id:6,name:'沈梦溪',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg'},
                    {id:7,name:'伽罗',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg'},
                    {id:8,name:'盾山',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg'},
                    {id:9,name:'司马懿',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg'},
                    {id:10,name:'孙策',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg'},
                    {id:11,name:'元歌',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg'},
                    {id:12,name:'米莱迪',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg'},
                    {id:13,name:'狂铁',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg'},
                    {id:14,name:'异星',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg'}
                ],
                value2: false,
                activeIndex:0,
                heroData:[
                    {id:0,name:'瑶',subName:"鹿灵守心",life:50,ack:60,ski:30,dif:50,price:80,headImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555668551053&di=7c89dd55bff95e1ddcd3887d5b30df90&imgtype=0&src=http%3A%2F%2Fnewsimg.5054399.com%2Fuploads%2Fuserup%2F1811%2F2G02HAT2.jpg', skill:[
                        {name:'山鬼·白鹿',spic:'被动：瑶被鹿灵守护着，当被晕眩，击退，击飞等硬控技能击中会立刻解除控制并变成鹿灵6秒（除压制效果以外）每30秒最多触发一次；鹿灵状态将会获得无法被攻击但也失去自己攻击别人的能力，灵鹿静怡的灵光会持续照拂敌人，减速30%。', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/50500.png' },
                        {name:'若有人兮',  spic:'举杖引魄击退身边的敌人，能量波向前飞行造成法术伤害，在快飞到终点前会检测范围内的英雄并化成第二段能量球跟踪打击造成法术伤害和0.75秒晕眩和显形效果。', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/50510.png'  },
                        {name:'风飒木萧', spic:'瑶持续5秒自动打击身边随机的敌人，最多3个目标，每次攻击都会造成法术伤害，技能开启期间内无法普攻。', url:' https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/50520.png' },
                        {name:'独立兮山之上', spic:'瑶附身到其他英雄，赋予附灵目标真实护盾（抵挡真实伤害），附身状态技能获得增强并且刷新所有技能冷却。附身状态：盾破会被击落下来进入CD，主动脱离附灵目标会返还50%冷却时间', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/50530.png'  }
                    ],isBuy:false},
                    {id:1,name:'盘古',subName:"破晓之神",life:80,ack:80,ski:60,dif:40,price:89,headImg:'http://p3.so.qhmsg.com/sdr/400__/t014bc4199e7a031a08.jpg', skill:[
                        {name:'盘古斧',spic:'被动：盘古的斧头具有10点耐久度，每次普攻命中敌方英雄会消耗1点耐久度，消耗完后斧头会破碎变成两只能量臂出现在盘古的身体两侧，切换瞬间盘古无法攻击并不可被选中，每20秒斧头会自动回复1点耐久度，切换形态时会清空1，2技能50%的最大冷却时间。盘古斧：盘古使用斧头时，每次普攻命中敌人会使敌人的伤口裂开，在之后的2秒时间内持续流血每0.5秒造成对方2%最大生命值的物理伤害，流血伤害不触发末世。能量臂：盘古使用能量臂时，每次普攻和技能命中都会在敌人身上叠加1层眩晕标记，满5层会使敌人眩晕1秒并触发额外200（+100%物理加成）点物理伤害，此效果对同一目标有3秒的冷却时间。', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/52900.png' },
                        {name:'狂怒突袭',  spic:'盘古朝指定位置跳跃并获得持续3秒50%的移速增加效果，落地时对内圈的敌人造成200/240/280/320/360/400（+100%物理加成）点物理伤害，如果落地时攻击到敌人加速效果会被移除。盘古斧：在跳跃期间盘古可以再次使用狂怒突袭选中一名敌人，落地后盘古会立刻冲向选中的敌人并将其击退造成100/130/160/190/220/250（+60%物理加成）点物理伤害并自己停下，同时在3秒内增加10/20/30/40/50/60%的攻击速度。能量臂：处于能量臂状态下时，将无法使用第二次狂怒突袭冲击敌人', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/52910.png'  },
                        {name:'压制之握', spic:'盘古在目标身边召唤正义之手对敌人进行攻击，如果被正义之手握住，敌人会受到200/230/260/290/320/250（+75%物理加成）点物理伤害，并减少50%移动速度，持续2秒，期间盘古的普攻对其造成伤害时会回复自身6%最大百分比的血量。盘古斧：当盘古拥有斧头时，压制之握还会使敌人被缴械，缴械期间敌人无法使用普通攻击，持续2秒。能量臂：处于能量臂状态下时，压制之握将不具备缴械效果', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/52920.png' },
                        {name:'开天辟地', spic:'盘古向上跃起，将力量汇聚到斧头上。力量汇聚完毕后盘古会将斧头朝前劈下，地面会朝前逐渐裂开，被地面的裂纹触碰的敌人会受到600/900/1200（+120%物理加成）点物理伤害并减少90%移动速度，持续2秒；减速效果在2秒内持续衰减，期间敌人被缴械；蓄力期间盘古可以吸收附近友方英雄的力量，每吸收1个就能多劈出一道裂缝，最多劈出5道；当多道裂缝命中同一个目标时，从第二道裂缝开始将只造成25%的伤害。此技能只有在盘古拥有斧头时才可以使用，蓄力期间盘古处于霸体状态。蓄力期间被打断会返还部分冷却时间。', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/52930.png'  }
                    ],isBuy:false},
                    {id:2,name:'猪八戒',subName:"无忧猛士",life:70,ack:55,ski:45,dif:45,price:86,headImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555668837722&di=b851f5e234fae15b57f7655f7b6a2d7b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190323%2Fab34a87bf05948b8818b46ab59a3cc62.jpeg',  skill:[
                        {name:'毫发无伤',spic:'被动：猪八戒损失的生命会以残血形态暂存,暂存期间猪八戒对英雄等值残血会转化为真实血量。', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/51100.png' },
                        {name:'肉弹蹦床',  spic:'猪八戒奋力跳起，落地时对砸到的敌人造成150/165/180/195/210/225（+8%最大生命加成）点物理伤害。之后弹性极佳的身体会再次高高弹起，并在落地时造成相同伤害，以及0.5秒晕眩效果。当同时攻击多个敌方英雄时，每增加一位敌方英雄衰减15%的伤害，最低衰减至初始的70%。再次落地时由于惯性极大，猪八戒会快速翻滚一段距离。跳跃期间猪八戒处于霸体状态', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/51110.png'  },
                        {name:'倒打一耙', spic:'猪八戒将钉耙变长直击前方敌人，造成150/180/210/240/270/300（+50%物理加成）点物理伤害和1.5秒60%减速效果。钉耙若嵌入地形，猪八戒会借力冲撞至嵌入处，并将路径上敌人击退至该处。猪八戒撞击地形时，造成150/165/180/195/210/225/（+6%最大生命加成）点物理伤害和0.5秒晕眩。被动：使用倒打一耙后，下次普攻会用钉耙把敌人拉回来', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/51120.png' },
                        {name:'圈养时刻', spic:'猪八戒筑起一堵高墙，英雄无法移动穿越；墙最多存在4秒；筑起瞬间对身前敌人造成250/325/400/(（+90%物理加成）点物理伤害；施法时猪八戒霸体', url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/51130.png'  }
                    ],isBuy:false},
                    {id:3,name:'嫦娥',subName:'寒月公主',life:40,ack:50,ski:70,dif:70,price:77,headImg:'http://p3.so.qhimgs1.com/sdr/400__/t0185318a4250e60323.jpg',skill:[
                        {name:'月盈',spic:'被动：嫦娥受到月光的守护，以自身法力值产生的护盾抵挡60%伤害，每1点法力抵挡2点伤害；嫦娥的法力值越高造成的伤害越高（最高满蓝提升100%伤害），每1点法术强度会提升嫦娥1.5点最大法力值',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/51500.png'},
                        {name:'月辰',spic:'嫦娥向指定方向释放能量，对命中的第一个目标造成150/180/210/240/270/300（+25%法术加成）点法术伤害并标记敌方3秒同时造成1秒定身效果，定身时长随法术强度影响，每100点法术强度额外造成0.15秒定神，最高定身2.5秒；',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/51510.png'},
                        {name:'月旋',spic:'短暂的延迟后，嫦娥在身边和指定位置召唤法力旋涡持续4秒，每次消耗范围内敌人10点法力值并回复自身0.5～1%最大法力值（随技能等级成长），造成40/50/60/70/80/90（+8%法术加成）点法术伤害；敌方英雄法力值不足时，不足消耗的法力值将转成对其造成同等的法术伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/51520.png'},
                        {name:'月芒',spic:'嫦娥解放狂暴的魔道力量提升自身30%移速，疯狂倾泻自身的法力值并随机向周围发射法力弹幕，每颗弹幕消耗40点法力，升级提升每秒弹幕数量（8/12/16）对命中的敌人造成110点法术伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/51530.png'}
                    ],isBuy:false},
                    {id:4,name:'上官婉儿',subName:'惊鸿之笔',life:60,ack:60,ski:55,dif:40,price:79,headImg:'http://img.99danji.com/uploadfile/2018/1218/20181218043932337.jpg',skill:[
                        {name:'笔阵',spic:'被动：上官婉儿每第三次普攻将进行强化攻击，会对一条路径上的敌人额外造成300（+40%法术加成）点法术伤害。上官婉儿各个技能的笔墨相互触碰的时候会迸发笔力，对附近敌人造成300（+40%法术加成）点法术伤害（1秒内连续命中伤害衰减50%），上官婉儿触碰笔力恢复150（+20%法术加成）点生命值并激活强化普攻。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/51300.png'},
                        {name:'篆法·疾势',spic:'上官婉儿朝指定方向挥出一记力道苍劲的笔墨，笔墨将会迅速减缓飞行速度并对触碰的敌人造成300/340/380/420/460/500(+40%法术加成）点法术伤害，当达到最远距离时，笔墨将会爆炸散开，对附近敌人造成300/340/380/420/460/500(+40%法术加成）点法术伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/51310.png'},
                        {name:'飞白·藏锋',spic:'上官婉儿选择一个点，然后以自己的位置为终点进行书写，落笔的一瞬间对触碰的敌人造成150/180/210/240/270/300(+20%法术加成）点法术伤害，书写过程中将会对触碰敌人造成300/360/420/480/540/600(+40%法术加成）点法术伤害和50%减速持续2秒（每12秒储存一次笔势，最多可储备2次)',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/51320.png'},
                        {name:'章草·横鳞',spic:'被动：上官婉儿每第三次普攻将进行强化攻击，会对一条路径上的敌人额外造成300（+40%法术加成）点法术伤害。上官婉儿各个技能的笔墨相互触碰的时候会迸发笔力，对附近敌人造成300（+40%法术加成）点法术伤害（1秒内连续命中伤害衰减50%），上官婉儿触碰笔力恢复150（+20%法术加成）点生命值并激活强化普攻。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/51330.png'}
                    ],isBuy:false},
                    {id:5,name:'李信',subName:'谋世之战',life:80,ack:65,ski:50,dif:70,price:56,headImg:'http://01imgmini.eastday.com/mobile/20181129/20181129021834_f2f3f37e4aec105d0fbac16d7f7c8dc0_2.jpeg',skill:[
                        {name:'灰暗利刃',spic:'被动：李信逐渐解放力量，普攻与2技能命中英雄能够获得额外5点经验值；狂暴利刃：李信普通攻击会造成两段伤害，第一段造成70%物理加成点物理伤害，第二段造成90～300点物理伤害（随人物等级成长），李信在该形态下会增加30点移速；辉耀利刃：李信释放技能后的下一次普通攻击距离提升并额外造成50%伤害，同时李信的强化普攻或者技能命中敌人将会减少所有技能1秒冷却时间',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/50700.png'},
                        {name:'急速突进',spic:'李信向指定方向进行突进；无畏冲锋：李信积蓄力量，解除减速效果，免疫控制并增加150点移动速度和每0.5秒50点生命回复，如果李信蓄力超过1秒，在蓄力结束时会提升30%攻击速度持续3秒，同时蓄力增加的移动速度也不会直接结束而是在3秒内缓慢结束。李信每次普攻命中敌人都可以减少一技能1秒的冷却时间；希望之跃：李信积蓄力量，结束后向指定方向突进并造成50/60/70/80/90/100（+50%物理加成）～150/180/210/240/270/300（+150%物理加成）点物理伤害并会附加目标已损生命值12%的物理伤害。蓄力1秒后伤害达到上限，蓄力打断返还40%的冷却时间，李信在技能蓄力的过程中免疫控制效果并减少20%所受到的伤害，免疫控制效果会延续到技能释放阶段',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/50710.png'},
                        {name:'强力斩击',spic:'李信向指定方向斩出剑气，对路径上敌人造成250/300/350/400/450/500（+100%物理加成）物理伤害和减速持续2秒；残暴撕裂：李信向指定方向斩出剑气，对路径上的敌人造成280/330/380/420/480/530（+80%物理加成）点物理伤害和50%减速持续2秒，被剑气命中的敌人还会被撕裂，使得李信的普通攻击会对其造成额外90/108/126/144/162/180点物理伤害，当剑气命中敌方英雄时，李信该形态下的普通攻击还可以回复25/30/35/40/45/50点生命值；迅烈之华：李信持续向指定方向斩出剑气，对路径上敌人造成100/120/140/160/180/200（+150%物理加成）点物理伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/50720.png'},
                        {name:'力量觉醒·光',spic:'李信学习大招的瞬间解放魔道家族的力量，改变战斗形态至统御；暗影爆发：李信释放力量，短暂延迟后以释放点为中心对范围内敌人造成600/900/1200（+120%物理加成）点物理伤害和0.75秒击飞；光翼连斩：李信积蓄力量，结束后向指定方向斩出三道剑气，对路径上敌人造成150/200/250（+75%物理加成）～450/600/750（+225%物理加成）点物理伤害，当多道剑气命中同个目标时，从第二道剑气开始将只造成30%的伤害；蓄力1秒后伤害达到上限，蓄力打断会返还40%的冷却时间，李信在技能蓄力的过程中免疫控制效果并减少20%所受到的伤害，免疫控制效果会延续到技能释放阶段',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/50730.png'}
                    ],isBuy:false},
                    {id:6,name:'沈梦溪',subName:'爆弹怪猫',life:60,ack:60,ski:80,dif:60,price:66,headImg:'http://09imgmini.eastday.com/mobile/20180904/20180904164943_4005dd58a853a0594647d99c1cdad4d4_3.jpeg',skill:[
                        {name:'暴躁节奏',spic:'被动：沈梦溪的技能命中目标后会将敌人点燃，点燃效果将持续3秒，使用普通攻击命中被点燃的敌人会触发爆炸对附近的敌人造成100（+16%法术加成）点法术伤害。同时被点燃的敌人会暴露视野且移动速度降低20%',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/31200.png'},
                        {name:'喵咪炸弹',spic:'沈梦溪蓄力后朝目标位置投掷一枚喵咪炸弹，爆炸后对范围内的敌人造成450/510/570/630/690/750(+50%法术加成）点法术伤害。炸弹投掷的最远距离和蓄力时间成正比，蓄力达1秒后射程达到上限；如果沈梦溪自身处于点燃状态，猫咪炸弹将锁定敌人，命中后会将敌人击退造成360/408/456/504/552/600(+40%法术加成）点法术伤害同时炸弹会继续朝前弹一段距离落地爆炸再次造成405/459/513/567/621/675(+45%法术加成)点法术伤害。炸弹每10秒获得一枚，最多可以存储5枚，获取速度受冷却缩减影响；',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/31210.png'},
                        {name:'正常操作',spic:'沈梦溪失误点燃了自己，期间移动速度增加100%并持续衰减，5秒后身上的炸弹会被引爆将沈梦溪朝前炸出一段距离，同时会将路径上的敌人炸晕并造成500/560/620/680/740/800（+65%法术加成）点法术伤害；点燃期间可以手动熄灭身上的火焰，冷却时间根据已燃烧的时间增加；在沈梦溪被点燃期间猫咪炸弹的投掷方式会发生变化。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/31220.png'},
                        {name:'综合爆款',spic:'沈梦溪蓄力后朝目标位置投掷一枚EX型混合炸弹，爆炸后对范围内的敌人造成500/700/900（+50%法术加成）点法术伤害，并在之后的2秒时间内累计造成250/350/450（+25%法术加成）点法术伤害，同时分裂出3枚猫咪炸弹朝四周散落，落地后爆炸对附近的敌人造成250/350/450（+25%法术加成）点法术伤害。炸弹投掷的最远距离和蓄力时间成正比；蓄力达2秒后射程达到上限。EX型混合炸弹每50秒会获得一枚，最多可以储存2枚，获取速度受冷却缩减影响。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/31230.png'}
                    ],isBuy:false},
                    {id:7,name:'伽罗',subName:'破魔之箭',life:40,ack:90,ski:50,dif:50,price:70,headImg:'http://img.yoyou.com/uploadfile/2018/0928/20180928045024110.jpg',skill:[
                        {name:'破魔之箭',spic:'被动：伽罗的普攻与技能伤害将会优先对目标的护盾效果造成一次等额的伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/50800.png'},
                        {name:'渡灵之箭',spic:'伽罗展开长弓，攻击间隔增长25%并提升200点射程；在此形态下，伽罗的每一次射击都会消耗50点法力值，并使目标获得持续2秒的损伤，每0.5秒额外造成45/47/49/51/53/55（+5%物理加成）点法术伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/50810.png'},
                        {name:'静默之箭',spic:'伽罗以长弓为施法媒介，张开法阵，并在一定的延迟后向指定方向射出破魔之箭，对路径上的敌人造成250/280/310/340/370/400（+40%物理加成）点法术伤害与0.5秒沉默及50%减速持续1秒，箭矢穿过区域在1秒后会爆炸对范围内敌人造成500/560/620/680/740/800（+80%物理加成）点法术伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/50820.png'},
                        {name:'纯净之域',spic:'伽罗在身边张开法阵持续8秒并可手动关闭，提升范围内友军20%暴击率；法阵在张开和关闭的瞬间会对范围内敌军造成250/350/450(+75%物理加成)点法术伤害，关闭时会对尚在法阵中的友军产生一个持续3秒的20%暴击率与20%移速增加的效果；被动：伽罗的暴击会对目标造成90%减速持续0.5秒；',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/50830.png'}
                    ],isBuy:false},
                    {id:8,name:'盾山',subName:'无尽之盾',life:100,ack:50,ski:50,dif:40,price:60,headImg:'http://p0.so.qhimgs1.com/sdr/400__/t010ae2f1a02238ffe0.png',skill:[
                        {name:'天地化盾',spic:'被动：盾山借助生成的石盾可完全抵挡掉大量的子弹技能，并且防御状态下获得30%免伤效果；庞大的身躯使得盾山的普通攻击将造成附带自身最大生命4%加成的物理伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/50900.png'},
                        {name:'一夫当关',spic:'盾山降低50%移速横盾于身前进入防御状态，触碰石盾的敌人会被击退并对其造成250/300/350/400/450/500(+50%物理加成）点物理伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/50910.png'},
                        {name:'万夫莫开',spic:'盾山向前冲锋击退身前的野怪小兵并造成550/620/690/760/830/900(+100%物理加成）点物理伤害，并且会扔回第一下撞到的敌方英雄，敌方英雄落地会对周围造成1秒晕眩和550（+100%物理加成）点物理伤害。可在技能不动如山持续期间使用，使用将立即收回张开的巨盾',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/50920.png'},
                        {name:'不动如山',spic:'盾山掀开身边的敌方单位造成300/400/500（+60%物理加成）点物理伤害，然后张开巨盾砸向地面造成300（+60%物理加成）点物理伤害和击退，被砸晕击退单位减缓移动速度50%持续1秒，后续的能量流动持续推开面前的敌人，造成的伤害将衰减50%',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/50930.png'}
                    ],isBuy:false},
                    {id:9,name:'司马懿',subName:'寂灭之心',life:60,ack:80,ski:70,dif:75,price:'77',headImg:'http://05imgmini.eastday.com/mobile/20180905/20180905231654_5f5fd2eae8dabcdb7590c5a09d7c8c5e_3.jpeg',skill:[
                        {name:'静默之语',spic:'被动：司马懿能够获得2000范围内施法者的视野且在该范围内释放技能会为司马懿回复5点能量；司马懿基础拥有80点能量（每级提升3点能量上限），同时每次击杀或者助攻能够提升10点能量上限，将普攻替换为巨大的镰刀攻击造成法术伤害，持续4秒，镰刀每击造成250（+40%法术加成）点法术伤害，替换为镰刀后的首次攻击可位移到目标身后造成500（+80%法术加成）点法术伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/13700.png'},
                        {name:'幽影之咬',spic:'司马懿释放无法被选中的灵体，过程中本体免疫控制，对穿过的敌人造成100/120/140/160/180/200（+20%法术加成）点法术伤害，效果结束后本体将会移动至灵体的位置，并对路径上的敌人造成100/120/140/160/180/200（+20%法术加成）点法术伤害和50%减速持续1秒',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/13710.png'},
                        {name:'荒芜之域',spic:'司马懿释放灵力，压制周围的区域造成300/350/400/450/500/550（+35%法术加成）点法术伤害与1秒沉默，如果司马懿2秒后还在被压制的区域中则会获得25/30/35/40/45/50点的能量；被动：司马懿吸收部分的法术伤害时，将其中30%在5秒内转化为生命值',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/13720.png'},
                        {name:'死神降临',spic:'司马懿化身死神，在短暂的蓄力后向指定地点冲击，造成700/875/1050（100%法术加成）点法术伤害，并且会对冲击路径触碰的敌人造成50%伤害',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/13730.png'}
                    ]},
                    {id:10,name:'孙策',subName:'光明之海',life:90,ack:40,ski:50,dif:50,price:'55',headImg:'https://p0.ssl.cdn.btime.com/t018cada3c18be3755a.jpg?size=640x294?size=640x294',skill:[
                        {name:'怒潮',spic:'被动：每过6秒，孙策的下一次普攻附带额外110(+60%物理加成)点物理伤害，并回复自身55（+30%物理加成）（+3%已损生命）点生命值;被动：每次受到物理伤害或真实伤害时，孙策获得1层不屈效果：护甲值提升20点，持续6秒，可叠加10层',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/51000.png'},
                        {name:'劈风斩浪',spic:'孙策向前冲锋，对路径上敌人造成120/144/168/192/216/240（+50%物理加成）点物理伤害。冲锋到终点后造成一次范围240/288/336/384/432/480（+100%物理加成）点物理伤害，短暂延迟后这个范围喷发波涛，再次造成相同伤害，并对命中敌人造成1秒击飞效果',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/51010.png'},
                        {name:'惊涛骇浪',spic:'连续三次向前踏步并劈砍，每次造成的物理伤害逐渐提高25%，基础造成160/192/224/256/288/320（+60%物理加成）点物理伤害，每次命中敌人造成30%减速，减速效果可叠加。使用技能会重置普通攻击冷却时间',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/51020.png'},
                        {name:'长帆破浪',spic:'驾船冲锋，速度逐渐提升，期间霸体，冲锋持续7秒。撞到兵线野怪造成伤害和击飞，撞到阻挡物、敌方英雄、航行时间结束时船都会爆炸造成300/450/600（+120%物理加成）点物理伤害和击飞，击飞时间1～1.5秒（与已航行时间成正比）。航行过程中可释放第二段，释放后船继续航行固定距离，同时孙策弃船朝选定方向跳跃固定距离。撞击到敌方英雄会获取5层不屈效果',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/51030.png'}
                    ]},
                    {id:11,name:'元歌',subName:'无间傀儡',life:50,ack:50,ski:70,dif:90,price:'88',headImg:'http://p0.so.qhmsg.com/sdr/400__/t019fdb60e9f578ff25.png',skill:[
                        {name:'秘术·操控',spic:'元歌将傀儡向指定方向掷出，对路径上敌人造成300/360/420/480（+125%额外物理加成）点物理伤害和击飞效果，并开始操控傀儡，傀儡会模仿一个敌方英雄直到攻击或者受到攻击；傀儡位于元歌900范围内时元歌会进行自动攻击；傀儡超过元歌2500范围5秒后会自动销毁；傀儡一旦死亡或销毁控制权将立即转回元歌本体身上并被禁用25秒',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/12500.png'},
                        {name:'秘术·影',spic:'元歌将傀儡向指定方向掷出，对路径上敌人造成300/360/420/480（+125%额外物理加成）点物理伤害和击飞效果，并开始操控傀儡，傀儡会模仿一个敌方英雄直到攻击或者受到攻击；傀儡位于元歌900范围内时元歌会进行自动攻击；傀儡超过元歌2500范围5秒后会自动销毁；傀儡一旦死亡或销毁控制权将立即转回元歌本体身上并被禁用25秒',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/12510.png'},
                        {name:'秘术·纸雏鸾',spic:'元歌在短暂延迟后向指定方向掷出4枚暗器，对路径上敌人造成450/550/650/750（+220%额外物理加成）物理伤害，暗器可以连续命中多枚，但伤害将折减70%',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/12520.png'},
                        {name:'秘术·十字闪',spic:'元歌甩出丝线向后拉扯，每根丝线对命中目标造成250/295/340/385（+100%额外物理加成）点物理伤害，被两条丝线命中的单位将会受到额外已损生命16%的物理伤害和50%减速效果持续2秒',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/12530.png'}
                    ]},
                    {id:12,name:'米莱狄',subName:'筑城者',life:80,ack:80,ski:70,dif:50,price:'66',headImg:'http://p5.so.qhimgs1.com/sdr/400__/t01ba36429d9f35c87b.jpg',skill:[
                        {name:'机械仆从',spic:'被动：直接被米莱狄或者机械仆从击杀的单位（除敌方机械仆从以外），会在其附近召唤1个机械仆从（至多存活8秒），短暂时间后冲向附近的敌人进行攻击。（机械仆从的攻击力,生命值和移动速度受到米莱狄的法术强度加成，机械仆从至多存在5个，超过上限时自动引爆更早的机械仆从）。机械仆从如果没有被击杀，生存期结束后将会发生爆炸对附近敌人造成200（+30%法术加成）点法术伤害。机械仆从攻击力：150（+30%法术加成）,机械仆从生命值：500（+100%法术加成）,机械仆从移动速度：450（+10%法术加成）',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/50400.png'},
                        {name:'空中力量',spic:'米莱狄指挥飞行器朝指定方向飞出，对沿路的敌人进行扫射造成60/70/80/90/100/110（+6%法术加成）点法术伤害。飞行器连续攻击2次以后，下一次攻击将会对目标发射一枚导弹，造成120（+12%法术加成）点法术伤害。飞行器在飞行的过程中，米莱狄可以发出指令让飞行器进行一次分裂，变为2个飞行器进行攻击，分裂的飞行器造成45/53/61/69/77/85（+4%法术加成）点法术伤害如果敌人同时受到2个飞行器的攻击，将会被减速50%持续1.5秒。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/50410.png'},
                        {name:'强制入侵',spic:'米莱狄标记一个位置，短暂时间后召唤两个机械仆从，落地时对附近敌人造成100/120/140/160/180/200（+20%法术加成）点法术伤害，并在1秒后激活，自动攻击附近的敌方单位，机械仆从存活至多8秒。每20/19/18/17/16/15秒储备一个机械仆从，至多储备3个',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/50420.png'},
                        {name:'浩劫磁场',spic:'米莱狄朝指定目标发出一颗信号装置，标记并晕眩敌人持续0.75秒（可对建筑释放但晕眩无效），被标记目标受到磁场干扰每0.5秒造成100/150/200（+5%法术加成）点法术伤害，并减少30%移动速度持续3秒，干扰效果结束时引发磁场爆炸攻击附近的敌人，造成基于干扰期间来自米莱狄和她的机械部队对其造成的总伤害30%/40%/50%法术伤害。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/50430.png'}
                    ]},
                    {id:13,name:'狂铁',subName:'战车意志',life:80,ack:70,ski:70,dif:70,price:'77',headImg:'http://thumb11.jfcdns.com/2018-03/bce5ab05e683a8bd.jpeg',skill:[
                        {name:'无畏战车',spic:'被动：狂铁的武器在击中敌人时会激发电流，进而为武器充能。普攻每命中一个英雄/非英雄回复7点/5点能量,技能每命中一个英雄/非英雄回复10点/7点能量，最多可储存90点能量。充能＞30点时，技能会获得不同的强化效果。每次普攻附带50点物理伤害，并在命中敌人时回复70（+15%物理加成）点自身生命值。强化技能使用时会消耗30点能量，且不会因击中敌人而获取能量。脱离战斗后，能量每秒减少3点。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/50300.png'},
                        {name:'碎裂之刃',spic:'狂铁奋力向前横挥武器两次，每次造成150/170/190/210/230/250(+100%物理加成)点物理伤害。每命中一个敌人回复自身已损生命值2%+30/36/42/48/54/60（+16%物理加成）点生命值。充能强化：伤害提升至225/255/285/315/345/375（+150%物理加成）点物理伤害，生命回复提升至已损生命值4%+60/72/84/96/108/120（+32%物理加成）点生命值。作用于非英雄单位时，生命回复效果减半。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/50310.png'},
                        {name:'强袭风暴',spic:'狂铁向前冲锋，冲锋路径上的敌人受到150/180/210/240/270/300(+75%物理加成)点物理伤害。冲锋结束后，狂铁的下次普攻得到强化，造成200/240/280/320/360/400（+100%物理加成）点物理伤害和50%减速效果持续2秒。充能强化：在释放强化普攻时若能量＞30，强化普攻伤害提升至300/360/420/480/540/600（+150%物理加成）点物理伤害，对受击者造成1秒击飞和晕眩，以及之后1秒50%减速。且在释放第一次强化普攻时消耗30点能量',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/50320.png'},
                        {name:'力场压制',spic:'狂铁将武器重重砸向地面，使电流向周围蔓延，电流对触及的敌人造成250/375/500（+100%物理加成）点物理伤害和1.5秒50%减速。强烈的电流还会形成可抵挡1000/1500/2000点伤害的护盾，护盾最多可持续6秒。充能强化：伤害提升375/563/751（+150%物理加成）点物理伤害，护盾值提升至1500/2250/3000。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/50330.png'}
                    ]},
                    {id:14,name:'弈星',subName:'天元之弈',life:50,ack:60,ski:80,dif:70,price:'75',headImg:'http://upload.qlwb.com.cn/2018/0320/1521517996380.jpg',skill:[
                        {name:'气合',spic:'被动：受到致命伤害时，弈星会遁入虚无，免疫所有伤害并提升30%移动速度，持续1秒，并在旁边自动生成两颗棋子，这个效果有90秒CD。弈星的普通攻击会造成70（+100%物理加成）（+20%法术加成）点法术伤害。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/19700.png'},
                        {name:'定式·镇神',spic:'在指定地点放置一颗黑色棋子，棋子生成时会对周围敌人造成200/240/280/320/360/400（+16%法术加成）点法术伤害。黑白棋子如果距离低于1000，则会互相吸引并爆炸，对范围内的敌人造成400（+32%法术加成）点法术伤害和90%减速持续1秒(爆炸伤害随英雄等级成长,2秒内连续受到爆炸后续伤害将衰减30%)。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/19710.png'},
                        {name:'定式·倚盖',spic:'在指定地点放置一颗白色棋子，棋子生成时会对周围敌人造成200/240/280/320/360/400（+16%法术加成）点法术伤害。黑白棋子如果距离低于1000，则会互相吸引并爆炸，对范围内的敌人造成400（+32%法术加成）点法术伤害和90%减速持续1秒(爆炸伤害随英雄等级成长,2秒内连续受到爆炸后续伤害将衰减30%)。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/19720.png'},
                        {name:'天元',spic:'弈星划出一个巨大的虚空棋盘，棋盘上会自动生成4颗棋子。释放技能2秒后棋盘完全成型，成型时对棋盘内的敌人造成480/720/960（+72%法术加成）点法术伤害和0.5秒眩晕，棋盘完全成型后所有棋盘上的敌人将无法离开棋盘范围，棋盘成型后共持续4秒。',url:'https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/19730.png'}
                    ]},
     
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            activeClass(id){
                // console.log('ok')
                this.activeIndex=id;
            }
         },
         components:{
             'hero-spci':HeroSpci
         }
    }
</script>

<style lang="scss" >
.hero-container{
    height:100%;
    overflow-x:hidden;
    position:absolute;
}
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
// .ivu-drawer-body::-webkit-scrollbar {
//     display:none
//     }
.hero-li-acitve{
    // background:rgba(255,255,255,0.8);
    background:lightyellow;

}


</style>