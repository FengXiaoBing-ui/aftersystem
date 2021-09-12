import store from '@/store/index';
import axios from 'axios'
import { Message} from 'element-ui';


var serve = axios.create({timeout:10000});//请求超时10s,创建axios实例
serve.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//设置请求头
serve.defaults.baseURL = 'https://gzjzyxh.tooge.cn/api/home'
//请求拦截器,在发送请求前做什么事情
 serve.interceptors.request.use(    
    config => {        
        // 每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        const token = store.state.token;
        if(token){
            config.headers.Authorization = token;  
        }     
        return config;    
    },    
    (error) => {        
        return Promise.reject(error);    
})
// 响应拦截器
serve.interceptors.response.use(
    response => {
        if (response.status == 200) {
            return Promise.resolve(response)
        }else{
            return Promise.reject(response)
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    console.log(error.response);
                    error.message = error.response.data.message
                    break;
                case 404:
                    error.message = '请求错误,未找到该资源'
                    break;
                default:
                    break;
            }
            Message.error(error.message)
        }
    }
)

 export default serve
