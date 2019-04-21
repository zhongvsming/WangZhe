<template>
    <div>
        <div class="login-logo">
            <div class="login-circle">
                <img src="./login.png" width="80px" height="80px">
            </div>
            <div class="login-btn">
                <button>点击登录</button>
            </div>    
        </div> 
        <div class="mine-btns">
            <div class="mine-btns-row1">
                 <a name="setting"><Icon type="md-settings" size="24"/>账户设置<Icon type="md-arrow-dropright" size="24"/></a>
                 <a><Icon type="md-create" size="24"/>意见反馈<Icon type="md-arrow-dropright" size="24"/></a>
            </div>
            <div class="mine-btns-row2">
                 <a name="contact"><Icon type="md-information-circle" size="24"/>用户协议<Icon type="md-arrow-dropright" size="24"/></a>
                 <a><Icon type="md-pizza" size="24"/>版本号<Icon type="md-arrow-dropright" size="24"/></a>
            </div>
            
        </div>       
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.login-logo{
    height:230px;
    background:#222;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
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
    [name=contact]{
        border-top:1px #c3c3c3 solid;
    }
}    

</style>