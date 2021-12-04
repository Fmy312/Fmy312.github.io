import {debounce} from 'common/utilis.js'

import BackTop from 'components/content/backtop/backTop.vue'

export const itemImageLoad={
    data() {
        return {
            itemImageLoad:null
        }
    },
    components:{
        BackTop
    },
    /* 利用混合将这个节流给提取出来 */
    mounted() {
        /* 混入里的this分别是对应组件那个实例 */
        const newfresh=debounce(this.$refs.scroll.refresh)
        this.itemImageLoad=()=>{
            newfresh()
            }
        this.$bus.$on('itemImageLoad',this.itemImageLoad)
    },
    methods: {
        /* 回到顶部按钮 */
        backTop(){
            this.$refs.scroll&&this.$refs.scroll.backtop(0,0)
        },
    },
}
