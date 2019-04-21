<template>
  <div id="app">

    <!-- 内容区域 -->
    <div class="main">
        <transition name="main">
           <!-- <router-view style="position:absolute;"></router-view>       -->
           <router-view></router-view>      
        </transition>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  background-color:#fff;
  overflow-x:hidden;
  margin: 0;
  padding:0;
  height: 100%;
}
.main-enter-active,.main-leave-active{
  transition:all 0.5s;
}
.main-enter{
  opacity:0;
  transform:translateX(-100%);
  /* position:absolute; */

}
.main-leave-to{
  opacity:0;
  transform:translateX(100%);
  /* position:absolute; */
}
.main{
  height:-webkit-calc(100% - 50px);
  height:-moz-calc(100% - 50px);
  height:calc(100% - 50px); 
  position:relative;
}
.tabbar{
  width:100%;
  height:50px;
  position:fixed;
  bottom:0px;
}
</style>
