import {Link} from 'react-router-dom';
import './Menu.css';
function Menu(){
    return(<div className='root'>

                    <div className='logo'>
                        <Link to='/' className='link-logo'>
                            <div> Product Store</div>                
                        </Link>
                    </div>    
                    <div className='nav'>
                        <Link to='/about' className='link'>
                            About
                        </Link>
                    </div>    
            

            </div>)

}
export default Menu;