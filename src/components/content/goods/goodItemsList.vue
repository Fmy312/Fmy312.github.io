<template>
<div class="good" @click="ToDetail">
    <img :src="showImage" alt="" @load="refresh"><!-- load原生js <=>img.onload() 每次加载一张照片时会触发一次-->
    <div class="goodtitle">
        <p>{{good.title}}</p>
        <span>{{good.price}}</span>
        <span>{{good.cfav}}</span>
    </div>
</div>
</template>

<script>
export default {
name:'GoodItemsList',
props:{
    good:{
    type:Object,
    default(){
        return {}
    }
    }
    
},
methods:{
    refresh(){
        this.$bus.$emit('itemImageLoad')
    },
    ToDetail(){
        /* this.$router.push({
            path:'/detail',
            param:{
                id:2
            }
        }) */
        /* 这是params传参 */
        this.$router.push('/detail/'+this.good.iid)
    }
},
computed:{
        showImage(){
            return this.good.image || this.good.show.img
        }
    },

}
</script>

<style>
.good{
    padding-bottom: 40px;
    position: relative;
    width: 48%;

}
.good img{
    width: 100%;
    border-radius: 5px;
}
.goodtitle{
    font-size: 12px;
    position: absolute;
    width: 100%;
    bottom: 0;
    text-align: center;
}
.goodtitle p{
    overflow:hidden;/*内容超出后隐藏*/
	text-overflow:ellipsis;/*超出内容显示为省略号*/
	white-space:nowrap;/*文本不进行换行*/
    margin-bottom: 3px;
}
.goodtitle span:nth-of-type(1){
    color: var(--color-high-text);
}
.goodtitle span:nth-of-type(2){
    position: relative;
    margin-left: 20px;
}
.goodtitle span:nth-of-type(2)::before{
    content: "";
    position: absolute;
    top: -1px;
    left: -15px;
    width: 14px;
    height: 14px;
    background:url("~assets/images/common/collect.svg") 0 0 /14px 14px ;
}
</style>