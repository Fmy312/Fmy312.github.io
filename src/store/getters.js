export const getters={
    CartLength(state){
        return state.goodCount.length
    },
    CartList(state){
        return state.goodCount
    },
}