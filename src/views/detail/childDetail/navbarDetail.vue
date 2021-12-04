<template>
<NavBar>
    <template v-slot:left>
        <div class="back" @click="titleback">
            <img src="~assets/images/common/back.svg" alt="">
        </div>
    </template>
    <template slot="center">
    <div class="title">
        <div v-for="(item,index) in titls"
        :key="index"
        class="item" 
        :class="{actived:currentIndex===index}"
        @click="titleclick(index)"
        >
        {{item}}
        </div>
</div>
    </template>
</NavBar>
</template>

<script>

import NavBar from 'components/common/navbar/navbar.vue'
export default {
    name:'NavBarDetail',
    data() {
        return {
            titls:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    components:{
        NavBar
    },
    methods:{
        titleclick(index){
            this.currentIndex=index,
            this.$emit('titleClick',index)
        },
        titleback(){
            this.$router.back()
        }
    }
}
        
</script>

<style>
.title{
    display: flex;
    font-size: 13px;
    justify-content: space-evenly;
}
.actived{
    color: var(--color-tint);
}
.back img{
    margin-top: 10px;
}
</style>