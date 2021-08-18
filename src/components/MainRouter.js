import ProductsContainer from './ProductsContainer';
import {BrowserRouter,Route} from 'react-router-dom';
import Menu from './Menu';
import Details from './Details';
import About from './About';
function MainRouter(){
    return(
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" component={ProductsContainer}/>
            <Route exact path="/product/:id" component={Details}/>
            <Route exact path="/about" component={About}/>

        </BrowserRouter>
    )
}

export default MainRouter;