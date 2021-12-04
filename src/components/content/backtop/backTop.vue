<template>
<div class="back-top" ref="backtop" v-show="!dicision">
    <img src="~assets/images/common/top.png" alt="">
</div>
</template>

<script>
export default {
    name:'backTop',
    data() {
        return {
            dicision:true
        }
    },
    methods:{
        /* 这个步骤有点多余了，可以直接写在home组件中 */
        hidden(m){
            this.dicision=m
        }
    },
    mounted(){
        this.$bus.$on('hidden',this.hidden)
    }
}
</script>

<style>
.back-top{
    position: absolute;
    bottom: 55px;
    right: 5px;
}
.back-top img{
    width: 50px;
}

</style>