import {
    ADD_COUNT,
    ADD_TO_CART,
}from './mutations-types'
export const mutations={
    [ADD_COUNT](state,product){
        product.count++
    },
    [ADD_TO_CART](state,good){
        good.count=1
        good.checked=true
        state.goodCount.push(good)
    },
    changeChecked(state,good){
        good.checked=!good.checked
    }
}