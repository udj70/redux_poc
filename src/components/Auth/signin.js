import { makeStyles} from "@material-ui/core";
//import { red } from "@material-ui/core/colors";

import {  useState } from "react"
import { Redirect, useHistory} from "react-router"
import auth from './auth-api'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {CardContent, CardActions} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
//import Icon from '@material-ui/core/Icon';
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
        color:'red',
        //fontSize:30
    },
    textField: {
        marginLeft: 10,
        marginRight: 10,
        width: 300
    },
    submit: {
        margin: 'auto',
        marginBottom: 20
    },
    highlights:{
        marginTop: 2,
        color:'red'
    }
});
function Signin(props){
    const [username,setName]=useState('')
    const [password,setPass]=useState('')
    const [error,setError]=useState('')
    const [loading,setload]=useState(false)
    const [redirectToReffferer,setRedirect]=useState(false)
    const history=useHistory()
    const handleClick=()=>{
        if(username=='' || password==''){
            setError("Username and Password is required")
        }
        else{
            setload(true)
            auth.signin({
                username:username,
                password:password
            }).then((data)=>{
                //console.log(data.token)
                if(data.token==undefined){
                    //console.log(data.token)
                    setload(false)
                    setError("Invalid Username or Password")
                }
                else setRedirect(true)
            })
        }
        
        
    }
    //console.log(window.history.state.state.from)
    const classes=useStyles();
    if(redirectToReffferer){
        const from=(window.history.state.state!==undefined)?(window.history.state.state.from.pathname!==undefined?window.history.state.state.from.pathname:window.history.state.state.from):'/'
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
                    <Typography type="headline" variant="h4" className={classes.title}>                        
                        Sign In
                    </Typography>
                    <TextField id="email" label="Email" type="email"  className={classes.textField} value={username} onChange={(event)=>setName(event.target.value)} margin="normal"></TextField> <br />
                    <TextField id="password" label="Password" type="password" className={classes.textField} value={password} onChange={(event)=>setPass(event.target.value)} margin="normal"></TextField> <br />
                   
                </CardContent>
                { error!='' &&
                    (<Typography type="headline" variant="h6" className={classes.highlights}>                        
                        {error}
                    </Typography>)
                }    
                <CardActions>
                    <Button color="primary" variant="contained" onClick={handleClick} className={classes.submit}>
                        Submit
                    </Button>
                </CardActions>
                
                <Typography type="headline" variant="h6" className={classes.highlights}>                        
                        Enter any of the below mentioned credentials
                    </Typography>
                <Typography type="headline" variant="body" component='p'>                        
                        username: johnd &nbsp; &nbsp;   
                        password: m38rmF$
                </Typography>
                <Typography type="headline" variant="body" component='p'>                        
                        username: david_r  &nbsp; &nbsp;
                        password: 3478*#54
                </Typography>
                <Typography type="headline" variant="body" component='p'>                        
                        username: donero   &nbsp; &nbsp;
                        password: ewedon
                </Typography>
            </Card>
    )
}


export default Signin;