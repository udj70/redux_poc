import {ADD_TO_CART,DELETE_CART,DELETE_FROM_CART} from './userActionTypes';
const initialState={
    products:[],
    count:0,
    totalPrice:0
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            state.products.push(action.payload)
            return{
                products:state.products,
                count:state.count+1,
                totalPrice:state.totalPrice+action.price
            }
        case DELETE_FROM_CART:
            return{
                products:state.products.filter((val)=>{return val!=action.payload}),
                count:state.count-1,
                totalPrice:state.totalPrice-action.price
            } 
        case DELETE_CART:
            return{
                products:[],
                count:0,
                totalPrice:0
            }
        default : 
            return{
                ...state
            }           
    }

}
export default userReducer;