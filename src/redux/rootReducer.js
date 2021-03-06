import {combineReducers} from 'redux';
import {productReducer,selectedProductReducer} from './product/productReducers';
import userReducer from './user/userReducer';
//import userReducer from './user/userReducer'; 
const rootReducer=combineReducers({
    product:productReducer,
    selectedProduct:selectedProductReducer,
    user:userReducer
})
export default rootReducer;