<template>
<div class="home">
<nav-bar class="homenav">
    <template v-slot:center>
        <div>
            首页
        </div>
    </template>
</nav-bar>
<!-- 复制了一个tabcontrol来完成固定效果 -->
<tab-control :titles="['流行','新款','精选']" 
    ref="tabControl"
    v-show="isFixed" 
    :currentIndex="currentIndex"
    @tabClick="tabClick"
    @goodBackTop="goodBackTop"/>
<scroll class="scroll" 
    :probeType="3" 
    :pullUpLoad="true"
    @pullUpLoad="pullUpLoad"
    ref="scroll" 
    @tabFixed="tabFixed"
>
    <home-swiper :banner="banner" @swiperLoad="swiperLoad" />
    <recommend-view :recommend="recommend"/>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" ref="tabControl"
    v-show="!isFixed"
    :currentIndex="currentIndex"
    @tabClick="tabClick"
    @goodBackTop="goodBackTop"
    />
    <good-item :goods="show"/>
</scroll>
<back-top @click.native="backTop"/><!-- 可以用@click.native="function"  直接对组件进行监视-->
</div>
</template>

<script>
import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utilis.js'
import {itemImageLoad} from 'common/mixin.js'

import GoodItem from 'components/content/goods/goodItem.vue'
import NavBar from 'components/common/navbar/navbar.vue'
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import Scroll from 'components/common/scroll/scroll.vue'



import HomeSwiper from './ChildComps/homeSwiper.vue'
import recommendView from './ChildComps/recommenViews.vue'
import FeatureView from './ChildComps/featureView.vue'




export default {
    name:'Home',
    components:{
        NavBar,
        HomeSwiper,
        recommendView,
        FeatureView,
        TabControl,
        GoodItem,
        Scroll,
        Scroll,
    },
    data() {
        return {
            banner:[],
            recommend:[],
            goods:{
                pop:{page:0,list:[]},
                sell:{page:0,list:[]},
                new:{page:0,list:[]},

            },
            currentType:'pop',
            offsetTop:null,
            isFixed:false,
            currentIndex:0,
            saved:0,
            itemImageLoad:null
        }
    },
    mixins:[itemImageLoad],
    computed:{
        show(){
            return this.goods[this.currentType].list
        }
    },
    created(){
        /* 异步请求应该放在created */
        this.getHomeMultidata(),
        this.getHomeGoods('pop')
        this.getHomeGoods('sell')
        this.getHomeGoods('new')
    },
    methods:{
        /* 封装成一个函数可以多次请求 */
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
            this.banner=res.data.banner.list;
            this.recommend=res.data.recommend.list
        })
        },
        /* 将请求来的数据 */
        getHomeGoods(type){
            const page=++this.goods[type].page
            getHomeGoods(type,page).then(res=>{
                /* concat不修改原数组只返回一个新的数组 */
                /* this.goods[type].list=this.goods[type].list.concat(res.data.list)  */
                this.goods[type].list.push(...res.data.list)
                
            })
            
        },
        /* 切换tab栏 */
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType='pop'
                    break;
                case 1:
                    this.currentType='new'
                    break;
                case 2:
                    this.currentType='sell'
                    break;
            }
            
            this.currentIndex=index
        },
        /* 向上拉取事件*/
        pullUpLoad(){
        this.getHomeGoods(this.currentType)
        },
        /* 当图片加载完成时再计算位置放置有bug */
        swiperLoad(){
            this.offsetTop=this.$refs.tabControl.$el.offsetTop
        },
        /* 判断是否开始定位 */
        tabFixed(position){
            if(Math.abs(position)>this.offsetTop){
                this.isFixed=true
            }else{
                this.isFixed=false
            }
        },
        /* 切换good时，让其返回顶部 */
        goodBackTop(){
            this.$refs.scroll&&this.$refs.scroll.backtop(0,-this.offsetTop)
        }
        
        
    },
        /* 获取他把tabcontrol的位置从而进行固定效果 */
        /* updated() {
            console.log(this.$refs.tabControl.$el.offsetTop);
        },
         */
    mounted(){
        /* this.$bus.$on('tabClick',this.tabClick);
        /* 防抖动 */
        const immediateLoad= debounce(this.$refs.scroll.refresh)
        this.itemImageLoad=(()=>{
            immediateLoad()
        })
        /* 在good组件里面被激活 */
        this.$bus.$on('itemImageLoad',this.itemImageLoad) 
        
    },
    /* 切换回来可以回到离开之前的位置 */
    activated(){
        this.$refs.scroll.scroll.refresh()
        this.$refs.scroll&&this.$refs.scroll.scroll.scrollTo(0,this.saved,0)
    },
    deactivated(){
        this.saved=this.$refs.scroll.getScrollY()
        this.$bus.$off('itemImageLoad',this.itemImageLoad)
    }
    
}
</script>

<style>
.home{
    height: 100vh;
}
.homenav{
    background-color: var(--color-tint);
    color: #fff;
}

.scroll{
    height: calc(100% - 93px);
    overflow: hidden;
}
/* .fixed{
    
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
} */
</style>