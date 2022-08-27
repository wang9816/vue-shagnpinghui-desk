/*
* Secondary packaging of axios
* */
import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
const service = axios.create({
    baseURL:'/mock',
    timeout:20000
})
// Add a request interceptor
service.interceptors.request.use(function (config) {
    // Do something before request is sent
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