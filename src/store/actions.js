import {
    ADD_COUNT,
    ADD_TO_CART
}from './mutations-types'
export const actions={
    /* 判断商品是否已经存在 */
    judgeProduct(context,newGood){
        return new Promise((resolve,reject)=>{
            const product =context.state.goodCount.find(item=>{
                return item.iid===newGood.iid
            })
            if(product){
                resolve('商品数量加1')
                context.commit(ADD_COUNT,product)
            }else{
                resolve('成功加入购物车')
                context.commit(ADD_TO_CART,newGood)
            }
        })
    }
    }