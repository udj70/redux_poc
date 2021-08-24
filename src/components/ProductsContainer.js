import React,{useEffect} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {fetchProductFailure,fetchProductSuccess,fetchProductRequest, paginatePages} from '../redux/product/productActions'
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
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
    root: {
      maxWidth:300 ,
      display:'inline-block',
      margin:2,
      height:500
    
     
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
    const products=product.slicedProducts
    const loading=product.loading
    console.log(products.products)
    const dispatch=useDispatch();
    const fetchProducts=()=>{
            dispatch(fetchProductRequest())
            return axios.get('https://fakestoreapi.com/products')
                .then((response)=>{
                    dispatch(fetchProductSuccess(response.data))
                    const slice=response.data.slice(0,product.perPage)
                    
                    dispatch(paginatePages(0,slice))
                   
                })
                .catch((error)=>{
                    dispatch(fetchProductFailure(error.message))

                })
    }
    useEffect(()=>{
                    fetchProducts()
                    },[])
    const receivedData=(current,offset)=>{
        const slice=product.products.slice(offset,offset+product.perPage)
        //console.log(offset," -",offset+product.perPage)
        dispatch(paginatePages(current,slice))
        //console.log(slice)
    }
    const handleChange=(value)=>{
        const selectedPage=value-1
        const offset=selectedPage*product.perPage;
        receivedData(selectedPage,offset)
        
    }
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

                
                    <Pagination
                        count={Math.ceil(product.products.length/product.perPage)}
                        color="primary" 
                        onChange={(event,value)=>handleChange(value)}
                    />  
        </>)
}

export default ProductsContainer;