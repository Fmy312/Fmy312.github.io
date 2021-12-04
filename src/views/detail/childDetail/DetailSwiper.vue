<template>
<div class="detailSwiper">
    <Swiper class="Swiper">
        <SwiperItem v-for="(item,index) in topimage" :key="index" >
                <img :src="item" alt="">
        </SwiperItem>
    </Swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'
export default {
    name:'DetailSwiper',
    props:{
        topimage:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
}
</script>

<style scoped>
.Swiper{
    height: 300px;
    overflow: hidden;
}
</style>