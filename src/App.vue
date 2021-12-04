<template>
  <div id="app">
  <main-tar-bar/>
  <keep-alive exclude="Detail">
  <router-view></router-view>
  </keep-alive>
  
  </div>
</template>

<script>
import MainTarBar from './components/content/maintarbar/MainTabbar.vue'

export default {
  name: 'App',
  components: {
    MainTarBar
  }
}
</script>

<style>
@import url("assets/css/base.css");
</style>
