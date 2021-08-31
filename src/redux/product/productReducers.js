import {FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_REQUEST,FETCH_PRODUCT_SUCCESS, 
    SELECTED_PRODUCT_SUCCESS,SELECTED_PRODUCT_FAILURE,SELECTED_PRODUCT_REQUEST, REMOVE_SELECTED_PRODUCT, PAGINATE_PAGES} from './productActionTypes';

const initialProductState={
    loading:false,
    products:[],
    error:'',
    perPage:4,
    currentPage:0,
    slicedProducts:[]
}
const selectedProductState={
    loading:false,
    selectedProduct:{},
    error:''
}
const productReducer=(state=initialProductState,action)=>{
    switch(action.type){
        case FETCH_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                products:action.payload
            }    
        case FETCH_PRODUCT_FAILURE:
            return{
                ...state,
                error:action.error
            }
        case PAGINATE_PAGES:
            return{
                ...state,
                currentPage:action.currentPage,
                slicedProducts:action.slicedProducts
            }  
       
        default :return  state    
    }
}

const selectedProductReducer=(state=selectedProductState,action)=>{
    switch(action.type){
        case SELECTED_PRODUCT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case SELECTED_PRODUCT_SUCCESS:
            return{
                ...state,
                loading:false,
                selectedProduct:action.payload

            }    
        case SELECTED_PRODUCT_FAILURE:
            return{
                ...state,
                error:action.payload
            }   
        case REMOVE_SELECTED_PRODUCT:
            return {
                loading:false,
                selectedProduct:{},
                error:''
            }     
        default: return state    
    }
}
export {productReducer,
        selectedProductReducer};