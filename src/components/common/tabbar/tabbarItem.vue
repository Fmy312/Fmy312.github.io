<template>
    <div class="tap-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-img"></slot>
        <slot v-else name="item-acitve-img"></slot>
        <div :style="ActiveColor"><slot name="item-text"></slot></div>
    </div>

</template>

<script>
export default {
  name:'TabbarItem',
  data() {
    return {
      /* isActive:true */
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    ActiveColor(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  props:{
    path:{name:String},
    activeColor:{
      name:String,
      default:'red'
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path).catch(()=>'')
      }
    },
    
  }



</script>

<style>
.tap-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}
.tap-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
}
.active{
  color: pink;
}
</style>
