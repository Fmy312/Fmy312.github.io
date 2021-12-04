import Vue from "vue";
import Vuex from 'vuex'
/* 分别将其封装起来 利于后期管理 */
import{actions} from './actions'
import{mutations} from './mutations'
import{state} from './state'
import{getters} from './getters'

Vue.use(Vuex)


export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state
})