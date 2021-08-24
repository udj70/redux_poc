import USER_IN_SESSION from './userActionTypes';

const userinSession=(v)=>{
    return{
        type:USER_IN_SESSION,
        payload:v
    }
}
export default userinSession