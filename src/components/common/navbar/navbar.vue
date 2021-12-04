<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:'NavBar',
}
</script>

<style>
.nav{
    display: flex;
    line-height: 44px;
    box-shadow: 0 2px 10px rgba(100, 100, 100, .1);
    /* position: sticky;
    top: 0px;
    z-index: 9; */
}
.left,.right{
    width: 60px;
    text-align: center;
    
}
.center{
    flex: 1;
    text-align: center;
}
</style>