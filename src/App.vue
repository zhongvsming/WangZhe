<template>
  <div id="app">
    <Home></Home>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/home/Home.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    Home
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
}
</style>
