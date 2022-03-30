import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './components/Register';
import {getAuth,onAuthStateChanged} from 'firebase/auth';
import {useDispatch} from 'react-redux'
import Login from './components/Login';

function App() {
  let auth = getAuth()
  let [user,SetUser] = React.useState(null)
  let dispatch = useDispatch()

  React.useEffect(()=>{
     onAuthStateChanged(auth,(AuthUser)=>{
       if(AuthUser){
         console.log(AuthUser)
         SetUser(AuthUser)
         console.log('you are Logged in!!')
         dispatch({
           type:'SETUSER',
           payload:AuthUser
         })
       }
       else{
         SetUser(null)
         console.log('You are logged out!!')
       }
     })
  },[user])
  return (
    <div className="App">
      <BrowserRouter>
           <Header/>
           <Routes>
              <Route path='/login' element = {<Login/>}></Route>
           </Routes>
             {user?
              <Routes>
              <Route path='/checkout' element = {<Checkout/>}></Route>
              <Route path='/' element ={<Home/>}></Route>
              </Routes>:<Register/>
              }
            <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
