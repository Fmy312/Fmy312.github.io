<template>
<div class="tab-control">
    <div v-for="(title,index) in titles" :key="index" class="tab-item" :class="{active:currentIndex===index}"
    @click="change(index)"
    >
    <span>{{title}}</span>
    </div>
</div>
</template>

<script>
export default {
    name:'TabControl',
    data() {
        return {
        
        }
    },
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        },
        currentIndex:{
            type:Number,
            default(){
                return 0
            }
        }
    },
    methods:{
        /* 切换（pop,sell,new）选项的方法 */
        change(index){
            this.$emit('tabClick',index)
            this.$emit('goodBackTop')
        }
    },
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
}
.tab-item{
    position: relative;
    flex: 1;
}
.active{
    color: var(--color-high-text);
}
.active::after{
    content: '';
    position: absolute;
    bottom: 6px;
    right: 37px;
    width: 32px;
    border-bottom:2px solid pink ;
}
</style>