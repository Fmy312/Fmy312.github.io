<template>
<div class="BottomBAr">
        <div class="left">
            <div><i class="icon serve"></i><span>客服</span></div>
            <div><i class="icon shop"></i><span>店铺</span></div>
            <div><i class="icon fan"></i><span>收藏</span></div>
        </div>
        <div class="right">
            <div class="cart" @click="addToCar">加入购物车</div>
            <div class="buy">购买</div>
        </div>
</div>
</template>

<script>
export default {
    name:'DetailBottomBar',
    methods:{
        addToCar(){
            this.$emit('AddCar')
        }
    }
}
</script>

<style scoped>
.BottomBAr{
    height: 49px;
    position: relative;
}
.left{
    width: 50%;
    display: flex;
    text-align: center;
}
.left div{
    flex: 1;
    font-size: 13px;
}
.icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 3px auto 0;
    background: url("~assets/images/detail/detail_bottom.png") 0 0/100%;
}
.serve{
    background-position: 0 -54px;
}
.shop{
    background-position: 0 -98px;
}
.right{
width: 50%;
display: flex;
text-align: center;
height: 49px;
line-height: 49px;
}
.cart{
    flex: 1;
    background: #ffe817;
}
.buy{
    color: #fff;
    flex: 1;
    background: var(--color-high-text);
    font-size: 14px;
}
</style>