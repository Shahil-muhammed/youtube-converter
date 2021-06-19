import React from 'react'
import { Route } from 'react-router'
import Login from './components/login/Login'
import Signup from './components/Signup'
import Home from './components/home/Home'
import DownloadButton from './components/DownloadButton/DownloadButton'

function App() {
    return (
        <div>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/login'>
                <Login/>
            </Route>
            <Route path='/sign up'>
                <Signup/>
            </Route>

        </div>
    )
}

export default App
