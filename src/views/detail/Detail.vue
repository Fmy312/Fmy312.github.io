<template>
<div class="detail">
    <NavbarDetail class="navbar" @titleClick="titleClick" ref="navBar"/>
    <Scroll class="Scroll" ref="scroll" @scroll="contentScroll" :probeType="3">
    <detail-swiper :topimage="topimage"/>
    <detail-base-info :good="good"/>
    <detail-shop :shop="shop"/>
    <detail-goods-info :detailinfo="detailInfo" @detailRefresh="detailRefresh"/>
    <detail-param-info :paramInfo="paramInfo" ref="params"/>
    <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
    <good-item :goods="recommend" ref="recommend"/>
    </Scroll>
    <back-top @click.native="backTop"/>
    <detail-bottom-bar @AddCar="AddTocar"/>
</div>
</template>

<script>
import Scroll from 'components/common/scroll/scroll.vue'
import GoodItem from 'components/content/goods/goodItem.vue'

import DetailShop from './childDetail/DetailShop.vue'
import NavbarDetail from './childDetail/navbarDetail.vue'
import DetailSwiper from './childDetail/DetailSwiper.vue'
import DetailBaseInfo from './childDetail/DetailBaseInfo.vue'
import DetailGoodsInfo from './childDetail/DetailGoodsInfo.vue'
import DetailParamInfo from './childDetail/DetailParamInfo.vue'
import DetailCommentInfo from './childDetail/DetailCommentInfo.vue'
import DetailBottomBar from './childDetail/DetailBottomBar.vue'


import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'
import {debounce} from 'common/utilis.js'
import {itemImageLoad} from 'common/mixin.js'
import { mapActions } from 'vuex'


export default {
    name:'Detail',
    data() {
        return {
            iid:null,
            topimage:[],
            good:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommend:[],
            themeTopYs:[],
            itemImageLoad:null,
            getThemeTop:null,
            index:null
        }
    },
    components:{
    NavbarDetail ,
    DetailSwiper ,
    DetailBaseInfo,
    DetailShop,
    DetailGoodsInfo ,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodItem,
    Scroll,
    },
    mixins:[itemImageLoad],
    created(){
        /* 获取商品的id */
        this.iid=this.$route.params.id
        getDetail(this.iid).then(res=>{
            this.topimage=res.result.itemInfo.topImages
            const data=res.result
            /* 获取商品信息 */
            this.good=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            /* 获取商家信息 */
            this.shop = new Shop(data.shopInfo);
            /* 获得商品数据 */
            this.detailInfo=data.detailInfo
            /* 获取商品参数 */
            this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
            /* 获取评论的信息 */
            if(data.rate.cRate!==0){
                this.commentInfo=data.rate.list[0]
            }
        }),
        
        /* 获取推荐的信息 */
        getRecommend().then(res=>{
            this.recommend=res.data.list
        })

    },
    mounted(){
        /* offsetTop的位置不正确 大概率是因为图片为加载出来 */
        this.getThemeTop=debounce(()=>{
            this.themeTopYs=[]
            const params=this.$refs.params.$el.offsetTop
            const comment=this.$refs.comment.$el.offsetTop
            const recommend=this.$refs.recommend.$el.offsetTop
            this.themeTopYs.push(0,params,comment,recommend,Number.MAX_VALUE)
        })
    },
    methods:{
        ...mapActions(['judgeProduct']),
        titleClick(index){
            this.$refs.scroll.backtop(0,-this.themeTopYs[index],500)
        },
        /* 防止商品图片加载不出来导致的滑不动 */
        detailRefresh(){
            this.getThemeTop()
            
        },
        /* Number.MAX_VALUE这是js里最大的数  这个函数用来根据滑动距离改变navbar */
        contentScroll(position){
            const length=this.themeTopYs.length-1
            for(let i=0;i<length;i++){
            if(this.index!==i&&-position.y>=this.themeTopYs[i]&&-position.y<this.themeTopYs[i+1]){
                this.index=i
                this.$refs.navBar.currentIndex=i
            }
            }
        },
        AddTocar(){
            const product={};
            product.image=this.topimage[0];
            product.title=this.good.title;
            product.desc=this.good.desc;
            product.price=this.good.realPrice;
            product.iid=this.iid
            this.judgeProduct(product).then(res=>{
                this.$toast.isShow(res)
            }).catch(err=>{
                throw err
            })
            
        }
    },
    beforeDestroy(){
        this.$bus.$off('itemImageLoad',this.itemImageLoad)
    }
}
</script>

<style scoped>
/* 只有加了定位才能运用z-index */
.detail{
    background-color: #fff;
    height: 100vh;
    position: relative;
    z-index: 9;
}
.Scroll{
    height: calc(100% - 93px);
    overflow: hidden;
}
</style>