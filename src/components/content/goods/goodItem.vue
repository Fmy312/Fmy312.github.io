<template>
<div class="goodItem">
    <good-items-list v-for="(item,index) in goods" :key="index" :good="item"/>
</div>
</template>

<script>
import GoodItemsList from './goodItemsList.vue'
export default {
    name:'GoodItem',
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
    }},
    components:{
        GoodItemsList
    }
}
</script>

<style>
.goodItem{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    z-index: 8;
}
</style>