<template>
    <div class="login-container">
        <!-- title栏 -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
			<h1 class="mui-title">登录</h1>
		</header>
        <!-- 头像区域 -->
        <div class="login-logo">
            <div class="login-circle">
                <!-- <img src="./login.png" width="80px" height="80px"> -->
            </div>
        </div> 
        <!-- 输入区域 -->
        <div class="inputArea">
            <div class="account"><label for="acount">账号:</label><input id="acount" type="text" v-model="acount"></div>
            <div class="password"><label for="password">密码:</label><input id="password" type="password" v-model="password"></div>
            <div class="goLogin"><button :plain="false" @click="gogoLogin">登录</button></div>
             
            <div class="goAcount"><a @click.prevent="gogoAccount">去注册>></a></div>
        </div>    
         <div>      
            <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="60%"
                top="60%">
                <span>账号或密码输入错误</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog> 
        </div>
    </div>
</template>

<script>
    export default {
        name:"login",
        data(){
            return {
                acount:'',
                password:'',
                dialogVisible: false
            }
        },
        methods: {
            back(){
                window.history.back()
            },
            gogoLogin(){
                this.dialogVisible=true
            },
            gogoAccount(){
                this.$router.push({name:'account'})
            }
        },
    }
</script>

<style lang="scss" scoped>
.login-container{
    position:absolute;
    width:100%;
    height:100%;
}
.login-logo{
    margin-top:30px;
    height:200px;
    background:#222;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-image:url('http://imgsports.eastday.com/sports/img/20170719/20170719144526_c0d7f3ee31c8de9fd79f2ceeb5af4dc8_2.jpeg');
}
.login-circle{
    width:100px;
    height:100px;
    // border:1px lightblue solid;
    border-radius:50%;
    img{
       margin-left:10px;
       margin-top:10px;
    }
}
.inputArea{
    padding:20px;
    label{
        font-size:1.2em;
    }
    input{
        height:35px;
        border-radius:10px;
    }
    .goAcount{
        margin-top:10px;
        text-align:center;
    }
    .goLogin{
        margin-top:10px;
    }
    button{
        background:#78a5f4;
        width:100%;
        border-radius:15px;
        height:40px;
    }
}
</style>