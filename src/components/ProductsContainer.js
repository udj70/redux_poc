import React,{useEffect} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {fetchProductFailure,fetchProductSuccess,fetchProductRequest} from '../redux/product/productActions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import Loading from './Loading';

const useStyles = makeStyles({
    root: {
      maxWidth:300 ,
      display:'inline-block',
      margin:2,
    
     
    },
    media:{
        maxWidth:160,
        margin:'auto',
        overflow:'hidden',

    },
    link:{
        textDecoration:'none',
        color:'black'
    }
  });

const ProductsContainer=()=>{
    const product=useSelector(state=>state.product)
    const products=product.products
    const loading=product.loading
    console.log(products.products)
    const dispatch=useDispatch();
    const fetchProducts=()=>{
            dispatch(fetchProductRequest())
            axios.get('https://fakestoreapi.com/products')
                .then((response)=>{
                    dispatch(fetchProductSuccess(response.data))
                })
                .catch((error)=>{
                    dispatch(fetchProductFailure(error.message))

                })
    }
    useEffect(()=>fetchProducts(),[])

   
    const classes = useStyles();  
    if(loading){
        return(
            <div style={{position:'absolute',left: '50%', top: '50%',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                loading... 
               </div> 
                    )          
    }
    return( <>
                { products.map(prod=><Card className={classes.root}>
                                        <Link to={"/product/"+prod.id} className={classes.link}>
                                            <CardActionArea>
                                                <CardMedia
                                                className={classes.media}
                                                component='img'
                                                alt="product description"
                                                height="280"
                                                image={prod.image}
                                                title="product image"
                                                />
                                                <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2" >
                                                    {prod.title}
                                                </Typography>
                                                
                                                </CardContent>
                                            </CardActionArea>
                                        </Link>    
                                    </Card>
                            )
                }
        </>)
}

export default ProductsContainer;