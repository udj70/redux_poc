import { HistorySharp } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import { deleteCart } from '../../redux/user/userActions';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
//import {useEffect, useState} from 'react';
import auth from '../Auth/auth-api';
import './Menu.css';
//import { useDispatch, useSelector } from 'react-redux';
//import userinSession from '../../redux/user/userActions';
const Menu=({match,location,history})=>{
    //const InSession= useSelector(state=>state.user.userinSession)
    //useEffect(()=>{},[InSession])
    const dispatch=useDispatch();
    const count=useSelector(state=>state.user.count)
    return(<div className='root'>

                    <div className='logo'>
                        <Link to='/' className='link-logo'>
                            <div> Product Store</div>                
                        </Link>
                    </div>   
                    <div className='nav'>
                        <Link to='/user/cart' className='link'>
                            <ShoppingCartOutlinedIcon/> {auth.isAuthenticated() && (<b>{count}</b>)}
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
                                                
                                                        <Link to='/' className='link' onClick={()=>{auth.signout(); dispatch(deleteCart())}}>
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