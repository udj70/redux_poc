import ProductsContainer from './Product/ProductsContainer';
import {BrowserRouter,Route} from 'react-router-dom';
import Menu from './Navbar/Menu';
import Details from './Product/Details';
import About from './About';
import Signin from './Auth/signin'; 
import Users from './User/Users'
import PrivateRoute from './Auth/PrivateRoute';
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