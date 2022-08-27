/*
* Secondary packaging of axios
* */
import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import store from "@/store";

const service = axios.create({
    baseURL:'/api',
    timeout:200000
})
// Add a request interceptor
service.interceptors.request.use((config) =>{
    // Do something before request is sent


    let userTempId = store.state.user.userTempId
    if(userTempId){
        config.headers.userTempId = userTempId
    }
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    NProgress.start()
    return config;
}, function (error) {
    // Do something with request error
    NProgress.done()
    return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    NProgress.done()

    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    NProgress.done()
    alert(error.message || "unknown error");
    return Promise.reject(error);
});


export default service