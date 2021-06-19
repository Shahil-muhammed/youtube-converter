import React, { useContext, useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import { FirebaseContext } from '../../store/firebaseContest'
import firebase from '../../Firebase/config'
import { useHistory } from 'react-router'
const Login=()=>{

    const paperStyle={padding :20,height:'50vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const his =useHistory()
    const call=(e)=>{
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,pass).then(()=>{
            his.push('/')
        })
  .catch((error) => {
      alert(error.message)
  });
    }
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <form onSubmit={call}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}>SHA</Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField onChange={(e)=>setemail(e.target.value)} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField onChange={(e)=>setpass(e.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login