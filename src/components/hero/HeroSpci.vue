<template>
    <div class="container">

        <div class="titleImg">
              <img src="./yao.jpg" alt="图片无法显示">
        </div>      

        <div class="baseInfo">
            <h2>鹿灵守心</h2>
            <h1>瑶</h1> 
            <ul>
                <li><em>生存能力</em><el-progress :percentage="70"></el-progress></li>
                <li><em>生存能力</em><el-progress :percentage="50"></el-progress></li>
                <li><em>生存能力</em><el-progress :percentage="60"></el-progress></li>
                <li><em>生存能力</em><el-progress :percentage="20"></el-progress></li>
            </ul>    
        </div>    

    </div>
</template>

<script>
    export default {
        name:'hero-spci',
        data(){
            return {
                
            }
        },
        props:[
 
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
                height:100%
            }
        }
        .baseInfo{
            h2{
                color:gold;
            //    font-size:1em;
            }
            h1{
                // font-size:2em;
            }
        }
    }
</style>