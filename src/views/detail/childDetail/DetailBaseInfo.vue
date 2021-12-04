<template>
<div v-if="Object.keys(good).length!==0">
    <div class="info-title">{{good.title}}</div>
    <div class="info-price" style="display:relative">
        <span>{{good.newprice}}</span>
        <span>{{good.oldprice}}</span>
        <span v-if="good.discount">{{good.discount}}</span>
    </div>
    <div class="columns">
        <div>{{good.columns[0]}}</div>
        <div>{{good.columns[1]}}</div>
        <div>{{good.services[good.services.length-1].name}}</div>
    </div>
    <div class="info-services">
        <span class="info-services-item" v-for="(n,index) in good.services.length" :key="index">
            <img :src="good.services[index].icon" alt="">
            <span>{{good.services[index].name}}</span>
        </span>
    </div>

</div>
</template>

<script>
export default {
    name:'DetailBaseInfo',
    props:{
        good:{
            type:Object,
            default(){
                return {}
            }
        }
    },

}
</script>

<style>
.info-title{
    color: black;
    margin-bottom: 5px;
    padding: 10px 4px;
}

.info-price span:first-child{
    color: var(--color-tint);
    font-size: 20px;
    margin-left:6px;

    
}
.info-price span:nth-of-type(2){
    font-size: 12px;
    margin-left: 5px;
    color:gray;
    text-decoration:line-through 
}
.info-price span:nth-of-type(3){
    display: inline-block;
    background-color:  var(--color-high-text);
    padding: 1px 6px;
    text-align: center;
    color: #fff;
    border-radius: 10px;
    font-size: 13px;
    margin-left: 4px;
    vertical-align: 5px;    
}
.columns{
    display: flex;
    justify-content: space-between;
    color: rgba(90, 84, 84, 0.897);
    font-size: 12px;
    margin-top: 10px;
    padding:0  6px  8px ;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    
}
.info-services{
    display: flex;
    padding: 15px 0 15px 0;
    justify-content: space-between;
    border-bottom: 4px solid #f6f6f6;
}
.info-services span{
    font-size: 12px;
}
.info-services span img{
    width: 12px;
    
}

</style>