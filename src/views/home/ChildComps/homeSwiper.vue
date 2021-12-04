<template>
<div>
    <Swiper>
        <SwiperItem v-for="item in banner" :key="item.acm" >
            <a :href="item.link">
                <img :src="item.image" alt="" @load="imageload">
            </a>
        </SwiperItem>
    </Swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
    name:'HomeSwiper',
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            load:false
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    methods:{
        /* 获取tabcontrol的位置从而进行固定效果 */
        imageload(){
            if(!this.load){
                this.$emit('swiperLoad')
                this.load=true
            }
            
        }
    }
}
</script>

<style>

</style>