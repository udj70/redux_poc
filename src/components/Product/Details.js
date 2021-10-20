import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';
import { selectedProductFailure, selectedProductSuccess, selectedProductRequest, removeSelectedProduct } from "../../redux/product/productActions";
import {addToCart} from '../../redux/user/userActions';
import { useEffect } from "react";

import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Loading from "../Loading";
import auth from "../Auth/auth-api";

const useStyles = makeStyles({
    root: {
      maxWidth:'80%',
      maxHeight:700,
      display:'inline-block',
      position:"relative",
      left:'12%',
    },
    media:{
        maxWidth:240,
        margin:'auto'
    },
    action:{
        
    },
    button:{
        width:'100%',
        margin:'auto',
        backgroundColor:'rgb(0,0,0,0.7)',
        color:'white',
        '&:hover':{
            backgroundColor:'black'
        }
    },
    link:{
        width:'100%',
        color:'white',
        margin:'auto',
        //backgroundColor:'rgb(0,0,0,0.7)',
        
        textDecoration:'none'
    }
  });

const Details=()=>{
    const selected_product=useSelector(state=>state.selectedProduct)
    const product=selected_product.selectedProduct
    const loading=selected_product.loading
    const {id}=useParams();
    
    const dispatch=useDispatch();
    const fetchProductDetails=(id)=>{
        dispatch(selectedProductRequest())
        axios.get('https://fakestoreapi.com/products/'+id)
             .then((response)=>{
                 dispatch(selectedProductSuccess(response.data))
                 
             })
             .catch((error)=>{
                 dispatch(selectedProductFailure(error.message))
             })
    }
    useEffect(()=>{if(id && id!=="" ) fetchProductDetails(id);

                    return ()=>{
                        dispatch(removeSelectedProduct())
                    }},[])
    const handleChange=(event)=>{
        dispatch(addToCart(id,product.price))
    }                
    const classes=useStyles();
    
    if(loading){
        return(
            <div style={{position:'absolute',left: '50%', top: '50%',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                    <Loading/>
               </div> 
                    )          
    }

    return(
        <>  
            <Card className={classes.root}>
                    <CardActionArea className={classes.action}>
                            <CardMedia
                                    className={classes.media}
                                    component='img'
                                    alt="product description"
                                    height="280"
                                    image={product.image}
                                    title="product image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                        {product.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {product.description}
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    <b>Price</b> - ${product.price}
                                </Typography>
                                <Typography variant="h6" color="textSecondary" component="p">
                                    <b>Category</b> - {product.category}
                                </Typography>
                                                
                            </CardContent>
                    </CardActionArea>
                    {!auth.isAuthenticated() && (<CardActions>
                        <Button size="large" color="primary" className={classes.button}>
                            <Link to={{
                                        pathname: '/signin',
                                        state: {from: '/product/'+id}
                                    }} className={classes.link}>
                                 Sign in and order now
                            </Link>
                        </Button>    
        
                            
                        </CardActions>)
                    }              
                    {auth.isAuthenticated() && (<CardActions>
                            <Button size="large" color="primary" className={classes.button}>
                                    Buy Now
                            </Button>
        
                            <Button size="large" color="primary" className={classes.button} onClick={handleChange}>
                                    Add to Cart
                            </Button>

                        </CardActions>)
                    }                   
                </Card>
                            

        </>
    )
}

export default Details;