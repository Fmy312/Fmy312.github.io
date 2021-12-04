<template>
<nav-bar>
    <template slot="center">
        <div>
            购物车({{CartLength}})
        </div>
    </template>
</nav-bar>
</template>

<script>
import {mapState,mapMutations,mapAction ,mapGetters} from 'vuex'
import NavBar from 'components/common/navbar/navbar.vue'
export default {
    name:'NavBarCart',
    components:{
    NavBar
    },
    computed:{
        ...mapGetters(['CartLength'])
    }
}
</script>

<style>

</style>