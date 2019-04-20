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
        // width:70px;
        // height:35px;
        font-size:1.3em;
        padding:7px;
        background:white;
    }
}
</style>