<template>
<div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    data() {
        return {
            scroll:null,
        }
    },
    /* 最早在mouted 可以找到dom树 或者在created里用this.$nextTick*/
    mounted(){
            this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad,
        
        })
        /* 回到顶部 （伴随这BackTop这个组件） */
        /* this.$bus.$on('BackTop',this.backtop) */
        /* 监听滚动事件 */
        if(this.pullUpLoad!==0){
        this.scroll.on('scroll',(position)=>{
            /* 决定backtop按钮是否出现 */
            if(Math.abs(position.y)>1000){
                this.$bus.$emit('hidden',false)
            }
            else{
                this.$bus.$emit('hidden',true)
            }
            /* 决定tabcontrol是否吸顶 */
            this.$emit('tabFixed',position.y)
            this.$emit('scroll',position)
        })
        }
        /* 监听滚到底部 */
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullUpLoad'),
            /* 多次刷新 */
            this.scroll.finishPullUp()
            
        })

    },
    props:{
        probeType:{
            type:Number,
            default(){
                return 0
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false
            }
        },
    },
    methods:{
        backtop(x,y,time=500){
            this.scroll.scrollTo(x,y,time)
        },
        refresh(){
            this.scroll&& this.scroll.refresh()
        },
        getScrollY(){
            return this.scroll?this.scroll.y:0
        }
    }

}
</script>

<style>

</style>