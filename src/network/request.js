import axios from "axios";
function request(config){
    const instance=axios.create({
        baseURL:'http://152.136.185.210:7878/api/hy66',
        timeout:5000,
    })
    /* 拦截器  请求前对配置进行操作 */
    instance.interceptors.request.use(config=>{
        return config
    })
    /* 反应给请求者之前，对数据进行操作如：只反应部分数据 */
    instance.interceptors.response.use(res=>{
        return res.data
    },err=>{
        console.log('444',err);
    }
    
    )
    /* 返回的是一个promise对象 */
    return instance(config)
}
export{request}