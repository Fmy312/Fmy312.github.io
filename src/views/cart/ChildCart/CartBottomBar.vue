<template>
    <div class="cart_bottom">
        <div class="check">
            <check-button class="button" @click.native="CheckAll" :ischecked="ischecked"/>
            <span>合计:{{totalCount}}</span>
        </div>
        <div class="countAll">
            <span>去计算{{calculate}}</span>
        </div>
    </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton.vue'
import { mapGetters } from 'vuex'
export default {
    name:'CartBottomBar',
    components:{
        CheckButton,
    },
    data() {
        return {
            
        }
    },
    computed:{
        ...mapGetters(['CartList','CartLength']),
        totalCount(){
        return '￥'+this.CartList.filter(item=>{
                return item.checked
            }).reduce((prevale,item)=>{
                return prevale+(item.price*item.count)
            },0)
        
    },
    ischecked:{
        get(){
            return this.CartList.length!==0&&this.CartList.every(item=>item.checked)
        },
        },
    calculate(){
        return '( '+ this.CartList.filter(item=>{
            return item.checked
        }).length +' )'
    }
    },
    methods:{
        CheckAll(){
            if(this.ischecked){
            this.CartList.forEach(item => {
                item.checked=false
            })}else{
                this.CartList.forEach(item => {
                item.checked=true
            })
        }
    },
    
}
}
</script>

<style>
.cart_bottom{
    height: 44px;
    background-color: #fff;
    box-shadow: 0 -1px 5px 1px rgba(0, 0, 0, 0.186);
    display: flex;
}
.check{
    height: 100%;
    flex: 2;
    margin: 0 10px;
    display: flex;
    align-items: center;
}
.check span{
    margin-left: 10px;
}
.check .button{
    height: 20px;
    line-height: 20px;
}
.countAll{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 1;
    background-color: var(--color-tint);;
    color:#fff;
}


</style>