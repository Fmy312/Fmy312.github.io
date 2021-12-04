/* 防抖动函数 */
/* 使用闭包时，父函数内部的变量不会被回收 */
export function debounce(fnc,delay=200){
    let timer=null;
    return function(...rest){
        if(timer)clearTimeout(timer);
        timer=setTimeout(()=>{
            fnc.apply(null,rest)
        },delay)
    }
}



/**时间格式化函数 */
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
        };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
    }
    return fmt;
};

function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};