import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import {FirebaseContext} from '../src/store/firebaseContest'
import firebase from '../src/Firebase/config'
import Signup from './components/Signup';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseContext.Provider value={{firebase}}>
      <App/>
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);