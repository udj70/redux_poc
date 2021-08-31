import {FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_REQUEST,
       SELECTED_PRODUCT_FAILURE,SELECTED_PRODUCT_SUCCESS,SELECTED_PRODUCT_REQUEST,
    REMOVE_SELECTED_PRODUCT, PAGINATE_PAGES} from './productActionTypes';


export const fetchProductRequest=()=>{
    return{
        type:FETCH_PRODUCT_REQUEST,

    }
}
export const fetchProductSuccess=prods=>{
    return{
        type:FETCH_PRODUCT_SUCCESS,
        payload:prods
    }
}

export const fetchProductFailure=(error)=>{
    return {
        type:FETCH_PRODUCT_FAILURE,
        payload:error
    }
}

export const selectedProductRequest=()=>{
    return{
        type:SELECTED_PRODUCT_REQUEST,
    }
}

export const selectedProductSuccess=prod=>{
    return{
        type:SELECTED_PRODUCT_SUCCESS,
        payload:prod
    }
}

export const selectedProductFailure=error=>{
    return{
        type:SELECTED_PRODUCT_FAILURE,
        payload:error
    }
}

export const  removeSelectedProduct=()=>{
    return{
        type:REMOVE_SELECTED_PRODUCT
    }
}

export const paginatePages=(currentPage,slicedProducts)=>{
    return{
        type:PAGINATE_PAGES,
        currentPage:currentPage,
        slicedProducts:slicedProducts
    }
}
