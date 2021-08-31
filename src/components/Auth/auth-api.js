import axios from "axios"
import { useDispatch } from "react-redux"

const auth={
    isAuthenticated:()=>{
        if(sessionStorage.getItem('token') ){
           
            return true
        }
        return false
    },
    signin:(user)=>{
        return axios.post('https://fakestoreapi.com/auth/login',user,{
            headers:{
                "content-type":"application/json"
            }
                

        })
        .then(response=>response.data)
        .then(data=>{sessionStorage.setItem('token',data.token)
                        return data})
        .catch((error)=>{
            console.log(error.message)
        })
        /*return fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
            .then(res=>res.json())
            .then(json=>{ console.log(json)
                        sessionStorage.setItem('token',json.token)
                        return json})*/
         
    },
    signout:()=>{
        if (typeof window !== "undefined") {
            sessionStorage.removeItem('token')
            
        }
    }
}

export default auth;