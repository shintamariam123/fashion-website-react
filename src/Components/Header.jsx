import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   <div>
    <div>
        <p style={{fontSize:'14px',marginTop:'5px'}} className='text-center'>Free Carbon Neutral Shipping on U.S. Orders $75+. Easy Returns.</p>
    </div>

    <div style={{width:'100%',height:'70px',backgroundColor:'white'}}>
    <Container>
   <Navbar className='d-flex align-items-center justify-content-between'>
    <div className='links1 d-flex align-items-center ' >
        <li><a href="">NEW</a></li>
        <li><a href="">CLOTHING</a></li>
        <li><a href="">SHOES | BAGS</a></li>
        <li><a href="">ABOUT</a></li>
    </div>
    <div>
        <img style={{height:'50px'}} src="https://www.marcellanyc.com/cdn/shop/files/logo_400px_200x@2x.png?v=1688051609" alt="" srcset="" />
    </div>
    <div className='links2 d-flex align-items-center ' >
        <li><i class="fa-solid fa-magnifying-glass"></i>SEARCH</li>
        <li><a href="">MY ACCOUNT</a></li>
        <li><a href="">GET REWARDS</a></li>
        <li><i class="fa-solid fa-cart-shopping"></i></li>
    </div> 
   </Navbar>
   </Container>
   </div>
   <div style={{position:'relative'}} className='image'>
    <div style={{position:'relative',top:'300px',left:'500px'}}>
    <h2>Hello, The Red Edit</h2>
    <h5>Vivid, Passionate, Poerfully Feminine</h5>
    </div>
   </div>
   <div style={{height:'60px'}}>
    <p style={{fontSize:'20px'}} className='text-center mt-3'>"Minimalism with an Edge" Essentials | Ethical. Sustainable. Socially Impactful.</p>
   </div>
   </div>
  )
}

export default Header