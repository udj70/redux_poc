import {Link, withRouter} from 'react-router-dom';
//import {useEffect, useState} from 'react';
import auth from '../Auth/auth-api';
import './Menu.css';
//import { useDispatch, useSelector } from 'react-redux';
//import userinSession from '../../redux/user/userActions';
const Menu=()=>{
    //const InSession= useSelector(state=>state.user.userinSession)
    //useEffect(()=>{},[InSession])
    //const dispatch=useDispatch();
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
                    
                    {!auth.isAuthenticated() && 
                        (<div className='nav'>
                            <Link to='/signin' className='link' >
                                Signin
                            </Link>
                        </div>)
                    }        
                    {auth.isAuthenticated() && (<div className='nav'>
                                                
                                                        <Link to='/' className='link' onClick={()=>auth.signout()}>
                                                            Logout
                                                        </Link>
                                                    
                                                </div>)
                    }    
         
                    <div className='nav'>
                            <Link to='/allusers' className='link' >
                                All Users
                            </Link>
                        </div>
                    
                   
            

            </div>

               )}
export default withRouter(Menu);