import { makeStyles} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import {  useState } from "react"
import { Redirect, useHistory} from "react-router"
import auth from './auth-api'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {CardContent, CardActions} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Loading from '../Loading';
const useStyles = makeStyles({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: 5,
        paddingBottom: 2
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: 2,
        color:'red'
    },
    textField: {
        marginLeft: 10,
        marginRight: 10,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: 20
    }
});
function Signin(props){
    const [username,setName]=useState('')
    const [password,setPass]=useState('')
    const [loading,setload]=useState(false)
    const [redirectToReffferer,setRedirect]=useState(false)
    const history=useHistory()
    const handleClick=()=>{
        setload(true)
        auth.signin({
            username:username,
            password:password
        }).then((data)=>{
            setRedirect(true)
        })
        
        
    }
    //console.log(window.history.state.state.from)
    const classes=useStyles();
    if(redirectToReffferer){
        const from=(window.history.state.state!==undefined)?window.history.state.state.from.pathname:'/'
        return(<Redirect to={from}/>)
    }
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
        
        <Card className={classes.card}>
                <CardContent>
                    <Typography type="headline" component="h1" className={classes.title}>                        
                        Sign In
                    </Typography>
                    <TextField id="email" label="Email" type="email" className={classes.textField} value={username} onChange={(event)=>setName(event.target.value)} margin="normal"></TextField> <br />
                    <TextField id="password" label="Password" type="password" className={classes.textField} value={password} onChange={(event)=>setPass(event.target.value)} margin="normal"></TextField> <br />
                   
                </CardContent>
                <CardActions>
                    <Button color="primary" variant="contained" onClick={handleClick} className={classes.submit}>
                        Submit
                    </Button>
                </CardActions>
                <Typography type="headline" component="h3" className={classes.title}>                        
                        Enter any of the below mentioned credentials
                    </Typography>
                <Typography type="headline" component="body">                        
                        username: johnd &nbsp; &nbsp;   
                        password: m38rmF$
                </Typography>
                <Typography type="headline" component="body">                        
                        username: david_r  &nbsp; &nbsp;
                        password: 3478*#54
                </Typography>
                <Typography type="headline" component="body">                        
                        username: donero   &nbsp; &nbsp;
                        password: ewedon
                </Typography>
            </Card>
    )
}
export default Signin;