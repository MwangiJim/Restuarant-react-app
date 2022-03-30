import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
       <LeftSide>
       </LeftSide>
        <RightSide>
            <Col>
              <h1>OH YES,WE <br/>
               DID,THE CABFEE <br/>
               RESTUARANT,WELL<br/>
               BAKED SLICE OF <br/>
               PIZZA
              </h1>
            </Col>
            <Col>
             <h3>FIND OUR RESTUARANTS</h3>
              <ul>
                  <li>1654 R.Don Road #304</li>
                  <li>New York</li>
                  <li>(602) 867-1010</li>
              </ul>
              <ul>
                  <li>1654 R.Don Road #304</li>
                  <li>New York</li>
                  <li>(602) 867-1010</li>
              </ul>
              <ul>
                  <li>1654 R.Don Road #304</li>
                  <li>New York</li>
                  <li>(602) 867-1010</li>
              </ul>
              <ul>
                  <li>1654 R.Don Road #304</li>
                  <li>New York</li>
                  <li>(602) 867-1010</li>
              </ul>
            </Col>
            <Col>
              <h3>WORKING HOURS</h3>
               <ul>
                   <li>MONDAY - FRIDAY</li>
                   <li>9:00 - 22:00</li>
               </ul>
               <ul>
                   <li>SATURDAY-SUNDAY</li>
                   <li>12:00 - 24:00</li>
               </ul>
            </Col>
        </RightSide>
    </Container>
  )
}

export default Footer

let Container = styled.div`
  display:flex;
  justify-content:space-between;
  height:100vh;
  width:100%;
`
let RightSide = styled.div`
  background-color:#333;
  display:flex;
  justify-content:space-between;
  padding: 60px 0 40px;
  flex-basis:70%;
`
let LeftSide = styled.div`
 flex-basis:30%;
 background-image:url('/Images/foo.jpg');
 background-position:center;
 background-size:cover;
 width:100%;
 height:100vh;
`
let Col = styled.div`
margin: 5% 5px;
padding: 10px;
 h1{
     font-weight:600;
     color:#fff;
 }
 h3{
     color:#ffc017;
     font-size:25px;
     margin: 15px 0;
     font-weight:400;
 }
 ul{
     margin-bottom:15px;
     li{
         list-style:none;
         font-size:19px;
         font-weight:400;
         color:#fff;
     }
 }
`