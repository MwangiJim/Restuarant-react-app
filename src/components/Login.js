import React from 'react'
import styled from 'styled-components'
import{getAuth,signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
    const auth = getAuth()
    let[Form,setForm] = React.useState({
        email:'',
        password:'',
        checked:false
    })
    const HandleInput =(event) =>{
        const{type,name,checked,value} = event.target
        setForm((prevForm)=>{
            return {
                ...prevForm,
                [name]:type === 'checkbox'?checked:value
            }
        })
    }
   const HandleForm =(e)=>{
       e.preventDefault()
       if(Form.email,Form.password){
           signInWithEmailAndPassword(auth,Form.email,Form.password)
           .catch((error)=>{
               alert(error.message)
           })
           Form.checked === true ?
           alert('You will receive all the notifications!'):
           alert('Consider Subscribing to avoid being left out!!')
       }
   }
  return (
    <Container>
           <LoginPad>
             <h2>Login</h2>
             <button>Join with Google</button>
             <button>
                 <img src = '/Images/facebook.png'/>
                 Join with Facebook
             </button>
             <form onSubmit={HandleForm}>
                 <label>Email Address</label>
                 <br/>
                 <input
                  type='email'
                  placeholder='Enter Email Address'
                  onChange={HandleInput}
                  value={Form.email}
                  name='email'
                  className='input'
                 />
                 <br/>
                 <label>Password</label>
                 <br/>
                 <input
                 type='password'
                 placeholder='Enter Password'
                    onChange={HandleInput}
                    value={Form.password}
                    name='password'
                    className='input'
                 />
                 <br/>
                 <input
                  type='checkbox'
                  onChange={HandleInput}
                   value={Form.checked}
                   name='checked'
                 />
                 <label>Would you like Notifications?</label>
                 <button>Login</button>
             </form>
           </LoginPad>
    </Container>
  )
}

export default Login
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
let LoginPad = styled.div`
top:50%;
 left:50%;
 transform:translate(-50%,-50%);
 position:absolute;
 height:450px;
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
`