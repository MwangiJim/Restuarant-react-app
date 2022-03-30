import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function Checkout() {
  let {order} = useSelector((state)=>state.orderProducts)
  let dispatch = useDispatch()
  function removefrombasket(){
     dispatch({
       type:'REMOVEFROMCART',
       payload:order.id
     })
  }
  return (
    <Container>
       <LeftSide>
          <div className='topsection'>
              <h4>Product</h4>
              <h4>Name</h4>
              <h4>Price</h4>
              <h4>Remove Item</h4>
              <h4>Total</h4>
          </div>
             {order.map((details)=>{
               return (
                <div className='Order'>
                   <img src={details.image}/>
                   <h3>{details.title}</h3>
                   <p>${details.price}</p>
                   <button onClick={removefrombasket}>REMOVE FROM BASKET</button>
                   <h4>${details.price}</h4>
                 </div>
               )
             })}
       </LeftSide>
       <RightSide>
            <h1>CART TOTAL({order.length} Items)</h1>
            <ul>
              <li><strong>Subtotal:</strong>${120.00}</li>
              <li><strong>Discount:</strong>${120.00}</li>
              <li><strong>Total:</strong>${120.00}</li>
            </ul>
            <button>CHECKOUT NOW</button>
       </RightSide>
    </Container>
  )
}

export default Checkout

let Container = styled.div`
  padding:90px 40px;
  display:flex;
  justify-content:space-between;
`
let LeftSide = styled.div`
  flex-basis:70%;
  .topsection{
    display:flex;
    justify-content:space-between;
    h4{
      font-size:25px;
    }
  }
  .Order{
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:left;
    img{
      width:150px;
    }
    p{
      color:gray;
      font-weight:300;
      font-size:25px;
    }
    h4{
      font-size:25px;
    }
    button{
      background-color:transparent;
      color:#000;
      border:none;
      outline:none;
      cursor:pointer;
    }
    margin: 15px 0;
  }
  .DeleteBtn{
    color:#000;
  }
`
let RightSide = styled.div`
  background-color:#333;
  width:100%;
  flex-basis:22%;
  height:max-content;
  padding:20px 32px;
  color:#fff;
  h1{
    margin: 15px 0;
    font-weight:500;
    font-size:20px;
  }
  ul{
    li{
      list-style:none;
      strong{
        margin:0 5px;
      }
    }
    margin:10px 0;
  }
  button{
    width:100%;
    color:#f44336;
    text-transform:uppercase;
    border:none;
    outline:none;
    cursor:pointer;
    height:35px;
    background-color:#fff;
  }
`