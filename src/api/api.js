import serve from './axios'
const apifn = {
    login(params){
        return serve.post('/login',{
            params:params
        });
    },
    register(params){
        return serve.get('/register',{
            params:params
        });
    }
}
export default apifn;