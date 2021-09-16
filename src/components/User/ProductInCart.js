

import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { productReducer } from "../../redux/product/productReducers";
const useStyles=makeStyles({
    root:{
        maxWidth:800,
    },
    media:{
        maxWidth:100,
        display:'inline',
        margin:10
         

    },
    text:{
        position:'absolute',
        top:'0px',
        display:'inline-block'
        
    }
})

const ProductInCart=(props)=>{
    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    const [url,setUrl]=useState('')
    //console.log(props.id)
    const id=props.id;
    const fetchProduct=()=>{
        axios.get('https://fakestoreapi.com/products/'+id)
             .then(res=>res.data)
             .then(data=>{setName(data.title);setPrice(data.price);setUrl(data.image)})
             .catch(err=>console.log(err.message))
    }
    useEffect(()=>fetchProduct(),[])   
    console.log(url) 
    const classes= useStyles();
    return(
        <Card className={classes.root}>
            <CardActionArea className={classes.action}>
                <CardMedia 
                    className={classes.media}
                    component='img'
                    height='150'
                    title='product Image'
                    image={url}
                />
                    <Typography variant='h6' component='p' className={classes.text}>
                        <b>{name}</b>
                        <br/>
                        <b>Price:</b> ${price.toFixed(2)}
                    </Typography>
            </CardActionArea>
        </Card>
    )
}
export default ProductInCart;