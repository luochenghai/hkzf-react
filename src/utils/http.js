import axios from 'axios'

// axios 的配置
const request = axios.create({
    baseURL:'http://localhost:8080'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做什么
    return config;
}, function (error) {
    // 对请求错误做什么
    return Promise.reject(error)
});

// 添加相应拦截器
request.interceptors.response.use(function (response) { 
    // 对相应数据做点什么
    return response;
}, function (error) { 
    // 对错误相应做点什么
        return  Promise.reject(error)
})
 
export default request;