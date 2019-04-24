<template>
    <div class="login-container">
        <div class="login-logo">
            <div class="login-circle">
                <img src="./login.png" width="80px" height="80px">
            </div>
            <div class="login-btn">
                <button @click="goLogin">点击登录</button>
            </div>    
        </div> 
        <div class="mine-btns">
            <div class="mine-btns-row1">
                 <a name="setting" @click.prevent="goSetting"><Icon type="md-settings" size="24"/>账户设置<Icon type="md-arrow-dropright" size="24"/></a>
                 <a @click.prevent="goSuggestion"><Icon type="md-create" size="24"/>意见反馈<Icon type="md-arrow-dropright" size="24"/></a>
            </div>
            <div class="mine-btns-row2">
                 <a name="contact" @click.prevent="goAgreememnt"><Icon type="md-information-circle" size="24"/>用户协议<Icon type="md-arrow-dropright" size="24"/></a>
                 <a><Icon type="md-pizza" size="24"/>版本号<span>v1.0.0</span></a>
            </div>
        </div>      
            <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="60%"
                top="60%">
                <span>请先登录</span>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog> 
        </div>
</template>

<script>
    export default {
        name:'mine',
        data(){
            return {
                dialogVisible: false
            }
        },
        methods: {
            goLogin(){
                this.$router.push({name:'login'})
            },
            goSetting(){
                this.dialogVisible=true
            },
            goSuggestion(){
                this.$router.push({name:'suggestion'})
            },
            goAgreememnt(){
                this.$router.push({name:'agreement'})
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
    height:230px;
    background:#222;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-image:url('http://www.crsky.com/uploadfiles/article/2017/06/26/2017062616273855.jpg')

}
.login-circle{
    // text-align:center;
    width:100px;
    height:100px;
    border:1px lightblue solid;
    border-radius:50%;
    // line-height:100px;
    // vertical-align:center;
    img{
       margin-left:10px;
       margin-top:10px;
    //    margin-right:auto;
    }
}
.login-btn{
    button{
        margin-top:15px;
        font-size:1em;
        padding:10px;
        background:white;
    }
}
.mine-btns-row1{
    margin-top:35px;
    a{
        // width:100%;
        height:50px;
        background:white;
        display:block;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 10px;
        // border-top:1px #c3c3c3 solid;
        border-bottom:1px #c3c3c3 solid;
    }
    a:active
    {
       background-color:#c3c3c3;
    }
    [name=setting]{
        border-top:1px #c3c3c3 solid;
    }
}    
.mine-btns-row2{
    margin-top:35px;
    a{
        // width:100%;
        height:50px;
        background:white;
        display:block;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:0 10px;
        // border-top:1px #c3c3c3 solid;
        border-bottom:1px #c3c3c3 solid;
    }
    a:active
    {
       background-color:#c3c3c3;
    }
    [name=contact]{
        border-top:1px #c3c3c3 solid;
    }
}    

</style>