import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import data from './ImageSource'

function Slider() {
    let[IndexSlide,setIndexSlide] = useState(0);
     function NextSource(){
         if(IndexSlide < data.length -1){
             setIndexSlide(IndexSlide+1)
         }
         else if (IndexSlide === data.length){
             setIndexSlide(0)
         }
     }
     function PrevSource(){
         if(IndexSlide > 0){
             setIndexSlide(IndexSlide-1)
         }
     }
  return (
     <Container>
         <FontAwesomeIcon icon={faArrowAltCircleLeft} className='arrows' onClick={PrevSource}/>
          {data.map((display,index)=>{
              return(
                  <div className={IndexSlide === index?'slide-active':'slide'}>
                      <Source>
                      <Text>
                        <h1>{display.title}</h1>
                        <h3>50% OFF <br/>
                            ORDER NOW
                        </h3>
                        <p>CABFEE</p>
                      </Text>
                        <img src={display.imgpath}/>
                      </Source>
                  </div>
              )
          })}
        <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrows' onClick={NextSource}/>
     </Container>
  )
}

export default Slider

let Container = styled.div`
  width:100%;
  height:100vh;
  background-color:rgb(209, 89, 9);
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:#fff;
  img{
      width:40%;
  }
  .arrows{
      font-size:30px;
      cursor:pointer;
      margin:0 20px;
  }
`
let Text = styled.div`
text-align:center;
  h1{
      font-weight:700;
      font-size:45px;
      ::after{
          content:'';
          width:100px;
          text-align:center;
          height:3px;
          background-color:#fff;
          display:block;
          margin:auto;
      }
  }
  h3{
      font-weight:600;
      font-size:30px;
      margin-top:20px;
      margin-bottom:20px;
      ::after{
        content:'';
        width:100px;
        text-align:center;
        height:3px;
        background-color:#fff;
        display:block;
        margin:auto;
    }
  }
`
let Source = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`