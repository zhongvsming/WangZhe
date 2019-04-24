<template>
    <div class="suggestion-container">
        <!-- title栏 -->
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="back"></a>
			<h1 class="mui-title">登录</h1>
		</header>
        <!-- 选项区域 -->
        <div class="selects">
            <h5 class="mui-content-padded">问题分类</h5>
			<div class="mui-card">
				<form class="mui-input-group">
					<div class="mui-input-row mui-radio mui-left">
						<label>功能建议</label>
						<input name="radio1" type="radio">
					</div>
					<div class="mui-input-row mui-radio mui-left">
						<label>功能异常</label>
						<input name="radio1" type="radio" checked>
					</div>
					<div class="mui-input-row mui-radio mui-left mui-disabled">
						<label>使用疑问</label>
						<input name="radio1" type="radio" >
					</div>
				</form>
			</div>
        </div>   
        <!-- 反馈区域 -->
        <div class="callBackContent">
            <h5>反馈内容</h5>
            <textarea rows="10" cols="30" place-holder="请输入内容">
                 
            </textarea>
        </div> 
        <!-- 联系方式区域 -->
        <div class="contact">
            <h5>联系方式</h5>
            <input type="text" place-holder="请输入手机号码">
        </div>  
        <!-- 提交按钮 -->
        <div><button>提交</button></div>
    </div>
</template>

<script>
    export default {
        name:'suggestion',
        methods: {
            back(){
                window.history.back()
            }
        },
    }
</script>

<style lang="scss" scoped>
    .suggestion-container{
        position:absolute;
        width:100%;
        height:100%;
    }
    .selects{
        margin-top:60px;
    }
    .callBackContent{
        padding:15px;
    }
    .contact{
        padding:15px;
    }
    button{
        background:#78a5f4;
        width:100%;
        border-radius:15px;
        height:40px;
    }
</style>