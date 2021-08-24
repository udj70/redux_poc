import USER_IN_SESSION from "./userActionTypes"

const initialState={
    userinSession:false
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case USER_IN_SESSION:
            return{
                ...state,
                userinSession:action.payload
            }
        default: return state    
    }
}

export default userReducer;