import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitchenSet } from '@fortawesome/free-solid-svg-icons'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {useDispatch} from 'react-redux'

function Register() {
  let dispatch = useDispatch()
  const auth = getAuth()
  let[Form,setForm] = React.useState({
    username:'',
    email:'',
    password:'',
    checked:false
  })
  const HandleInput =(event)=>{
     const {type,name,checked,value} = event.target
     setForm((prevForm)=>{
       return {
         ...prevForm,
         [name]:type === 'checkbox'?checked:value
       }
     })
  }
function HandleForm(e){
  e.preventDefault()
   if(Form.username,Form.password,Form.email){
      createUserWithEmailAndPassword(auth,Form.email,Form.password)
      .then((AuthUser)=>{
        return AuthUser.user.updateProfile({
          displayName:Form.username
        })
      })
      .catch((error)=>{
        alert(error.message)
      })
      dispatch({
        type:'SETUSERNAME',
        payload:Form.username
      })
   }
}
let styles = {
  display:Form.checked === true ? 'block':'none'
}
  return (
    <Container>
        <RegisterPad>
             <h2>Create Account</h2>
             <button>Join with Google</button>
             <button>
                 <img src = '/Images/facebook.png'/>
                 Join with Facebook
             </button>
             <form onSubmit={HandleForm}>
               <label>Username</label>
               <br/>
               <input
               type='text'
               placeholder='Enter Username'
                className='input'
                onChange={HandleInput}
                value={Form.username}
                name='username'
               />
               <br/>
               <label>Email Address</label>
               <br/>
               <input
               type='email'
               placeholder='Enter Email'
                 className='input'
                 onChange={HandleInput}
                 value={Form.email}
                 name='email'
                 />
               <br/>
               <label>We will never share your email address with anyone</label>
               <br/>
               <label>Password</label>
               <br/>
               <input
               type='password'
               placeholder='Enter Password'
                  className='input'
                  onChange={HandleInput}
                  value={Form.password}
                  name='password'
               />
               <br/>
               <input
                 type='checkbox'
                 onChange={HandleInput}
                 value={Form.checked}
                 name='checked'
               />
               <label>I Agree with Cabfee Terms And Conditons.</label>
               <button style={styles}>
                 <FontAwesomeIcon icon={faKitchenSet}/>
                 Create Cabfee Account
                </button>
                <p>Already Have an Account?<a href='/login'>Login</a></p>
             </form>
        </RegisterPad>
    </Container>
  )
}

export default Register

let Container = styled.div`
 width:100%;
 height:100vh;
 background-color:rgb(77,76,76,0.4);
 backdrop-filter:blur(10px);
 -webkit-backdrop-filter:blur(10px);
 z-index:150;
 top:0;
 left:0;
 position:fixed;
`
let RegisterPad = styled.div`
 top:50%;
 left:50%;
 transform:translate(-50%,-50%);
 position:absolute;
 height:560px;
 width:500px;
 background-color:#fff;
 border-radius:5px;
 padding:20px 12px;
 h2{
   text-align:center;
 }
 button{
   width:100%;
   height:40px;
   margin:13px 0;
   background-color:rgb(209, 89, 9);
   outline:none;
   border:none;
   border-radius:5px;
   color:#fff;
   display:flex;
   justify-content:center;
   align-items:center;
   font-size:16px;
   cursor:pointer;
   img{
     filter:invert(1);
     width:13px;
     height:20px;
   }
 }
 form{
   margin: 0;
   border-radius:5px;
   .input{
     width:96%;
     height:43px;
     border-radius:5px;
     padding: 0 10px;
     border: 2px solid #000;
     margin: 15px 0;
     outline:none;
     border:2px solid #000;
   }
   label{
     text-align:left;
   }
 }
 p{
   text-align:center;
   margin:10px 0;
 }
 `