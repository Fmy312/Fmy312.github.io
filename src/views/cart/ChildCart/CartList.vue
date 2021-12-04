<template>
<div class="cart-list">
    <Scroll class="scroll" ref="Scroll">
            <cart-list-item v-for="(good,index) in CartList" :key="index" :itemInfo="good"/>
    </Scroll>
</div>

</template>

<script>
import CartListItem from './CartListItem.vue'

import Scroll from 'components/common/scroll/scroll.vue'

import { mapGetters } from 'vuex'
export default {
    name:'Cartlist',
    components:{
        Scroll,
        CartListItem
    },
    computed:{
        ...mapGetters(['CartList'])
    },
    activated(){
        this.$refs.Scroll.refresh()
    }
}
</script>

<style scoped>
.cart-list{
    height: calc(100vh - 93px - 44px);
}
.scroll{
    height: 100%;
    overflow: hidden;
}
</style>