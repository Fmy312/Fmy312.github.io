<template>
<div class="Cart">
    <!-- 导航栏 -->
    <nav-bar-cart class="nav-bar"/>
    <!-- 商品列表 -->
    <CartList/>
    <!-- 商品底部 -->
    <cart-bottom-bar/>
</div>
</template>

<script>
import NavBarCart from './ChildCart/NavbarCart.vue'
import CartList from './ChildCart/CartList.vue'
import CartBottomBar from './ChildCart/CartBottomBar.vue'
export default {
    name:'Cart',
    components:{
        NavBarCart,
        CartList,
        CartBottomBar
    },
    
}
</script>

<style>
.Cart{
    height: 100vh;
}
.nav-bar{
    background-color: var(--color-tint);
    color: #fff;

}
</style>
