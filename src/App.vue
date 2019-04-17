<template>
  <div id="app">
    <!-- 内容区域 -->
    <div class="main">
         <router-view></router-view>
    </div>     

    <!-- 底部导航栏 -->
    <div class="tabbar">
      		<nav class="mui-bar mui-bar-tab">
              <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
              </router-link>
              <router-link class="mui-tab-item" to="/hero">
                <span class="mui-icon mui-icon-starhalf"></span>
                <span class="mui-tab-label">英雄</span>
              </router-link>
              <router-link class="mui-tab-item" to="/order">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">订单</span>
              </router-link>
              <router-link class="mui-tab-item" to="/mine">
                <span class="mui-icon mui-icon-person-filled"></span>
                <span class="mui-tab-label">我的</span>
              </router-link>
        </nav>
    </div> 

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/home/Home.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-color:#fff;
}
.main{
 
}
.tabbar{
  width:100%;
  height:50px;
  position:fixed;
  bottom:0px;
}
</style>
