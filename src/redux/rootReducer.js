import {combineReducers} from 'redux';
import {productReducer,selectedProductReducer} from './product/productReducers';
const rootReducer=combineReducers({
    product:productReducer,
    selectedProduct:selectedProductReducer
})
export default rootReducer;