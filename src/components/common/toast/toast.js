import Toast from './Toast.vue'
const obj={}
/* vue。use实际就是调用了这个install函数所以不能将这个函数写成一个箭头函数
不然this则会指向别的地方
*/
obj.install=function(Vue){
    /* 组件构造器 */
    const ToastContrustor=Vue.extend(Toast)
    /* 根据组件构造器创建一个组件对象 */
    const toast=new ToastContrustor()
    /* 先将创建的组件对象挂在到Dom中 */
    toast.$mount(document.createElement('div'))
    /* 再将其添加到body中 */
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast=toast
}
export default obj