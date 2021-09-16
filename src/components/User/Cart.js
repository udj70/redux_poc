
import { Paper,CardMedia, makeStyles, Typography ,Card, CardActionArea, CardActions, Button} from "@material-ui/core"
import { useSelector } from "react-redux"
import ProductInCart from './ProductInCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { Block } from "@material-ui/icons";




const useStyles=makeStyles({
    root:{
        paddingTop:10,
        height:500,
        margin:10
    },
    media:{

    },
    card:{
        float:'right',
        width:300,
        height:150,
        position:'sticky',
        top:10,
        marginRight:10,
        paddingTop:20
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
        display:'block',
        width:600,
        height:40,
        margin:'auto',
        backgroundColor:'rgb(0,0,0,0.7)',
        color:'white',
        '&:hover':{
            backgroundColor:'black'
        },
        textDecoration:'none',
        borderRadius:'5px'
    },
    icon:{
        display:'block',
        margin:'auto',
        height:60,
        width:60
    }
})

const Cart=()=>{
    const user=useSelector(state=>state.user)
    const products=user.products
    const totalPrice=user.totalPrice.toFixed(2)
    const classes=useStyles()
    if(products.length==0){
        return(
           <Paper className={classes.root} elevation={4}>
               <ShoppingCartOutlinedIcon className={classes.icon}/>
               <Typography variant='h3' componet='p' align='center'>
                    Oops, Your cart is empty
               </Typography>
               <br/>
                <Link to='/' className={classes.link}>
                    <Button className={classes.button} color='primary'>
                            Go back to Home page
                    </Button>
               </Link>

           </Paper>
        )
    }
    return(
        <Paper className={classes.root} elevation={4}>

            <Typography variant='h4' component='p' align='center'>
                <b>CART</b>
            </Typography>
            <Card className={classes.card} elevation={3}>
                <CardActionArea>
                    <Typography variant='h5' component='p'>
                        Subtotal ({user.count} items) : <b>${totalPrice}</b> 
                    </Typography>
                </CardActionArea>
                
                <CardActions>
                    <Button color='primary' className={classes.button}>
                        Proceed to Buy
                    </Button>
                </CardActions>
            </Card>
            {products.map((prod,i)=><ProductInCart id={prod}/>

            )}

        </Paper>
    )
}

export default Cart;