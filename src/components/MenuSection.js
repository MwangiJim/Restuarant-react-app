import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

function MenuSection(props) {
 // let {order} = useSelector((state)=>state.orderProducts)
  //console.log(order)
  let dispatch = useDispatch()
  function AddtoCart(){
     dispatch({
       type:'ADDTOORDER',
       payload:{
         image:props.image,
         title:props.title,
         price:props.price,
         description:props.description
       }
     })
  }
  return (
    <Container>
         <img src={props.image}/>
         <h4>{props.title}</h4>
         <p>${props.price}</p>
         <h5>{props.description}</h5>
         <button onClick={AddtoCart}>Add To Cart</button>
    </Container>
  )
}

export default MenuSection
let Container = styled.div`
  padding:50px;
  box-shadow:0 0 2px 2px #000;
  width:100%;
  height:40vh;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin:0 5px;
  border-radius:5px;
  h4{
      color:rgb(209, 89, 9);
      margin:10px 0;
  }
  p{
      font-weight:bold;
  }
  img{
      width:220px;
      object-fit:contain;
  }
  button{
      padding:9px 30px;
      color:#fff;
      background-color:rgb(209, 89, 9);
      outline:none;
      border:none;
      border-radius:5px;
      margin-top:10px;
      cursor:pointer;
  }
  :hover{
      box-shadow:0 0 4px 4px #000;
  }
`