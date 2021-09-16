import {ADD_TO_CART,DELETE_FROM_CART,DELETE_CART} from './userActionTypes';
export const addToCart=(id,price)=>{
    return {
        type:ADD_TO_CART,
        payload:id,
        price:price
    }
}

export const deleteFromCart=(id,price)=>{
    return{
        type:DELETE_FROM_CART,
        payload:id,
        price:price
    }

}

export const deleteCart=()=>{
    return {
        type:DELETE_CART
    }
}
