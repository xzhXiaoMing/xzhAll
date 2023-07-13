// export default  只能暴漏一个所以用下面这种方式

import axios from 'axios'

// export function request(config){
// // 1-我们通过new Promise()创建了一个Promise对象。包装了我们的异步操作，即发送 HTTP 请求。
// // 2-构造函数中，定义两个参数：resolve 和 reject。它们分别是成功时和失败时的回调函数。
// return new Promise((resolve, reject)=>{
// // 3-创建了一个 Axios实例 instance，并配置基本的请求信息，如 baseURL 和 timeout。
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout: 5000,
//     });
// // 4- 使用instance(config)发送请求，
//     instance(config)
// // 5- 请求成功时，通过.then()注册成功时回调函数。接收一个res参数，表示请求成功的响应数据。
//     .then(res => {
// // 6- 成功回调中，调用 resolve(res)将 Promise 状态设置为 fulfilled ,并将响应数据传递给调用者。
//         resolve(res)
//     })
// // 7- 请求错误时，使用.catch()注册失败的回调函数。接收一个 err 参数，表示请求失败的错误信息。
//     .catch(err => {
// // 8- 失败回调函数中，调用 reject(err) 将 Promise 状态设置为 rejected ，并将错误信息传递给调用者
//         reject(err)
//     })
// })
// }

// fulfilled（已完成）：表示异步操作成功完成，即 Promise 对象被成功解决。
// rejected（已拒绝）：表示异步操作失败，即 Promise 对象被拒绝。


export function request(config){
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout: 5000,
    })

    //2、axios的拦截器  interceptors拦截器   request表示要拦截请求
    instance.interceptors.request.use(config=>{
        console.log(config);
        return config
    },err=>{
        console.log(err);
    }),    //拦截请求

    instance.interceptors.response.use()   //拦截响应

    // 发送网络请求   //默认是一个Promise对象 所以可以简化，自带then跟cath
    return instance(config)
}