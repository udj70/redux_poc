import ProductsContainer from './ProductsContainer';
import {BrowserRouter,Route} from 'react-router-dom';
import Menu from './Menu';
import Details from './Details';
import About from './About';
import Signin from './signin'; 
import Users from './Users'
import PrivateRoute from './PrivateRoute';
function MainRouter(){
    return(
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" component={ProductsContainer}/>
            <Route exact path="/product/:id" component={Details}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/signin" component={Signin}/>
            <PrivateRoute exact path="/allusers" component={Users}/>

        </BrowserRouter>
    )
}

export default MainRouter;