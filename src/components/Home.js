import React from 'react'
import styled from 'styled-components'
//import Header from './Header'
import MenuSection from './MenuSection'
import Slider from './Slider'
import {useSelector} from 'react-redux'

function Home() {
  let {order,User} = useSelector((state)=> state.orderProducts)
  return (
    <Container>
        <Slider/>
        <h2>Welcome to our Menu Section<br/>
          {User.email}
         </h2>
        <Row>
            <MenuSection
              id='12'
              image = '/Images/dish-1.png'
              title = 'Hamburger'
              price = {10}
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
            <MenuSection
             id='12'
              image = '/Images/dish-2.png'
              title = 'Chicken Nuggets'
              price = {5.00}
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
        </Row>
        <Row>
            <MenuSection
             id='12'
              image = '/Images/dish-3.png'
              title = 'Full Chicken Served with Lemon'
              price = {10}
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
            <MenuSection
             id='12'
            image = '/Images/dish-4.png'
            title = 'Pizza Stack'
            price = {15}
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
            <MenuSection
             id='12'
              image = '/Images/dish-5.png'
              title = 'Black Forest Cake'
              price = {8}
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
        </Row>
        <Row>
            <MenuSection
             id='12'
            image = '/Images/dish-6.png'
            title = 'Chicken Legs'
            price = {2}
               description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
            <MenuSection
             id='12'
            image = '/Images/menu-1.jpg'
            title = 'Pizza Extra Large'
            price = {25}
                description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
            <MenuSection
             id='12'
            image = '/Images/menu-2.jpg'
            title = 'Double Hamburger Size'
            price = {10}
                description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
            <MenuSection
             id='12'
            image = '/Images/menu-3.jpg'
            title = 'Spiced Pancakes'
            price = {5.99}
                 description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
        </Row>
        <Row>
            <MenuSection
             id='12'
              image = '/Images/menu-4.jpg'
              title = 'Fried Salmon'
              price = {9.99}
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
            <MenuSection
             id='12'
              image = '/Images/menu-5.jpg'
              title = 'Fried Salmon'
              price = {10}
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
            <MenuSection
             id='12'
              image = '/Images/menu-6.jpg'
              title = 'Ice Cake'
              price = {10.15}
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
            />
        </Row>
        <Row>
            <MenuSection
             id='12'
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
              image = '/Images/menu-7.jpg'
              title = 'Fresh Juice For Vegan'
              price = {6.99}
            />
            <MenuSection
             id='12'
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
              image = '/Images/menu-8.jpg'
              title = 'Scrambled Eggs'
              price = {4.99}
            />
             <MenuSection
              id='12'
              description = 'Lorem ipsum dolor dut amet consectur adipiscing elit'
              image = '/Images/menu-9.jpg'
              title = 'Fresh Juice For Vegan'
              price = {8.99}
        />
        </Row>
    </Container>
  )
}

export default Home

let Container = styled.div`
h2{
    text-align:center;
    font-weight:400;
    font-size:30px;
}
`
let Row = styled.div`
 display:flex;
 justify-content:space-evenly;
 margin: 20px 2%;
`