import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import {ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Person from '@material-ui/icons/Person';
import {Link} from 'react-router-dom';
const useStyles=makeStyles({
    root:{} ,
    title: {
        margin: '4px, 2px',
        color: 'red',
        fontSize: 20
    }
})
function Users(){
    const [users,setUsers]=useState([])
    const fetchUsers=()=>{
        axios.get('https://fakestoreapi.com/users')
            .then((response)=>response.data)
            .then((data)=>setUsers(data))
            .catch(error=>console.log(error.message))
    }
    useEffect(()=>fetchUsers(),[])
    const classes=useStyles();
    return(
        <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>
                    All Users
                </Typography>
                <List dense>
                    {
                        users.map((item, i) => {
                        return <Link to={"/user/" + item.id} key={i}>
                                    <ListItem button>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Person />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText >{`${item.name.firstname}   ${item.name.lastname}`}</ListItemText>
                                        <ListItemSecondaryAction>
                                            <IconButton>
                                                <ArrowForward />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                               </Link>
                        })
                    }
                </List>
            </Paper>
        )
    }
        

export default Users;