<template>
<TarBar>
    <TarBarItem path="/home" >
    <template slot="item-img">
        <div>
        <img  src="@/assets/images/tabbar/home.svg" alt="">
        </div>
        </template>
        <template slot="item-acitve-img">
        <div>
        <img src="@/assets/images/tabbar/home_active.svg" alt="">
        </div>
        </template>
        <template v-slot:item-text>
        首页
        </template>
    </TarBarItem>
    <TarBarItem path="/category" >
    <template slot="item-img">
        <div>
        <img src="~assets/images/tabbar/category.svg" alt="">
        </div>
    </template>
    <template slot="item-acitve-img">
        <div>
        <img src="~assets/images/tabbar/category_active.svg" alt="">
        </div>
        </template>
    <template slot="item-text">
        分类
    </template>
    </TarBarItem>
    <TarBarItem path="/cart" >
    <template slot="item-img">
        <div>
        <img src="~assets/images/tabbar/shopcart.svg" alt="">
        </div>
    </template>
    <template slot="item-acitve-img">
        <div>
        <img src="~assets/images/tabbar/shopcart_active.svg" alt="">
        </div>
        </template>
    <template slot="item-text">

        购物车

    </template>
    </TarBarItem>
    <TarBarItem path="/profile" >
    <template slot="item-img">
        <div>
        <img src="~assets/images/tabbar/profile.svg" alt="">
        </div>
    </template>
    <template slot="item-acitve-img">
        <div>
        <img src="~assets/images/tabbar/profile_active.svg" alt="">
        </div>
        </template>
    <template slot="item-text">

        我的

    </template>
    </TarBarItem>
</TarBar>
</template>

<script>
import TarBar from '../../common/tabbar/tabbar.vue'
import TarBarItem from '../../common/tabbar/tabbarItem.vue'
export default {
    name:'MainTabbar',
    components:{
        TarBarItem,
        TarBar
    },
}
</script>

<style>

</style>
