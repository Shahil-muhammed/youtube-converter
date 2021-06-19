import React, { useState,useContext } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { FirebaseContext } from '../store/firebaseContest'
import firebase from '../Firebase/config'
import {useHistory,BrowserRouter} from 'react-router-dom'
const Signup=()=>{

    const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [user, setuser] = useState('')
    const [phone, setphone] = useState('')
    const history=useHistory()
    const {} = useContext(FirebaseContext)
    const sign=()=>{
        alert("login successfully please sign in with your account")
    }
    const handle=(e)=>{
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayNmae:user}).then(()=>{
                firebase.firestore().collection('users').add({
                    id:result.user.uid,
                    username:user,
                    phone:phone
                })
            }).then(()=>{
                history.push('/login')
            })
        })
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={handle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}>SHA</Avatar>
                    <h2>Sign up</h2>
                </Grid>
                <TextField label='email'  onChange={(e)=>setemail(e.target.value)} placeholder='Enter Email' type='email' fullWidth required/>
                <TextField label='Password' onChange={(e)=>setpassword(e.target.value)} placeholder='Enter password' type='password' fullWidth required/>
                <TextField label='Username'  onChange={(e)=>setuser(e.target.value)} placeholder='Enter username' fullWidth required/>
                <TextField label='phone'  onChange={(e)=>setphone(e.target.value)} placeholder='Enter phone number' type='phone' fullWidth required/>
                <Button type='submit' onClick={sign} color='primary' variant="contained" style={btnstyle} fullWidth>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup