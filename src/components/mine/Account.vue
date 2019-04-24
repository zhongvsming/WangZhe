<template>
    <div class="account-container">
        <!-- title栏 -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
			<h1 class="mui-title">注册</h1>
		</header>
        <!-- 图片区域 -->
        <div class="picture">
            <img src="http://imgnews.mumayi.com/file/2019/02/20/ca016b7b92aee51116418fd1598de9e4.png" width="100%">
        </div> 
        <!-- 输入区域 -->
        <div class="inputArea">
            <div class="account"><label for="acount1">邮箱/手机:</label><input id="acount1" type="text" v-model="account"></div>
            <div class="password"><label for="password1">密码:</label><input id="password1" type="password" v-model="password"></div>
            <div class="goAcounnt"><el-button :plain="false" @click="gogoAcount">注册</el-button></div>
             
            <div class="goLogin"><a @click.prevent="gogoLogin">去登录>></a></div>
        </div> 
        <div>      
            <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="60%"
                top="60%">
                <span>请输入完整的邮箱或手机</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog> 
        </div>   
    </div>
</template>

<script>
    export default {
        name:'account',
        data(){
            return {
                account:'',
                password:'',
                dialogVisible: false
            }
        },
        methods: {
            back(){
                window.history.back()
            },
            gogoLogin(){
                this.$router.push({name:'login'})
            },
            gogoAcount(){
                this.dialogVisible=true
            }
        },
    }
</script>

<style lang="scss" scoped>
.account-container{
    position:absolute;
    width:100%;
    height:100%;
}
.picture{
    margin-top:40px;
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
    .goAccount{
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