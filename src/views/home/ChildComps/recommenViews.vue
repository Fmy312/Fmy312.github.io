<template>
<div class="recommend">
    <div class="tableofcontents" v-for="item in recommend" :key="item.acm">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
</div>
</template>

<script>
export default {
    name:'recommendView',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    text-align: center;
    width: 100%;
    padding: 10px 0  20px;
    border-bottom:8px solid #eee
}
.tableofcontents{
    flex: 1;
    font-size: 12px;
    
}
.tableofcontents a img{
    width:90%;
    margin-bottom: 8px;
}


</style>