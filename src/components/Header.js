import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

function Header() {
    let auth = getAuth()
    let{order,username,User} = useSelector((state)=>state.orderProducts)
    console.log(order.length)
    console.log(username)
  return (
    <Container>
       <LeftSide>
           <FontAwesomeIcon icon={faPhone} className='phone'/>
             <div className='content'>
                 <h3>ORDER NOW</h3>
                 <small>+254 0123 456 789</small>
             </div>
       </LeftSide>
       <Center>
           <li><a href=''>Homepage</a></li>
           <li><a href=''>Products</a></li>
           <li><a href=''>Menu</a></li>
         <Link to={`/`}><li><i>Cabfee</i></li></Link>
           <li><a href=''>Events</a></li>
           <li><a href=''>Blog</a></li>
           <li><a href=''>Contacts</a></li>
       </Center>
       <Right>
           <h4>HELLO {User.email}</h4>
           <button onClick={()=>auth.signOut()}>LOGOUT</button>
           <Link to={`/checkout`}>
           <FontAwesomeIcon icon={faShoppingCart} className='cart'/>
           <span>{order.length}</span>
           </Link>
       </Right>
    </Container>
  )
}

export default Header

let Container = styled.div`
 width:100%;
 padding:5px 0;
 z-index:100;
 background-color:rgb(209, 89, 9);
 top:0;
 left:0;
 position:fixed;
 display:flex;
 justify-content:space-between;
 align-items:center;
 color:#fff;
`
let LeftSide = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 margin:0 20px;
 .content{
     text-align:left;
     color:#fff;
     margin: 0 10px;
 }
 .phone{
     color:#000;
     background-color:#fff;
     padding:5px;
     border-radius:50%;
 }
`
let Center = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 li{
     list-style:none;
     position:relative;
     padding:8px 15px;
     a{
         text-decoration:none;
         color:#fff;
     }
     i{
        font-size:30px;
        text-decoration:none;
        font-family:'Dancing Script',cursive;
    }
     ::after{
         content:'';
         width:0;
         height:2px;
         background-color:#fff;
         display:block;
         margin:auto;
         transition:0.5s;
     }
     :hover::after{
         width:100%;
     }
 }
`
let Right = styled.div`
display:flex;
justify-content:center;
align-items:center;
 .cart{
     color:#fff;
     font-size:24px;
 }
 span{
     background:#fff;
     padding:0px 6px;
     border-radius:50%;
     color:black;
     bottom:14px;
     right:5px;
     position:relative;
 }
 margin:0 20px;
 button{
     background:transparent;
     padding:12px 35px;
     color:#fff;
     cursor:pointer;
     outline:none;
     border:none;
     font-size:18px;
 }
`