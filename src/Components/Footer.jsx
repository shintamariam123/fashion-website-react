import React from 'react'

function Footer() {
  return (
    <div style={{ backgroundColor: 'white', paddingTop: '50px', color: 'black' }}>
      <div style={{ height: '300px' }} className='container  mt-5 w-100'>
        <div className=' footer d-flex  justify-content-between'>
          <div className='footer-content d-flex justify-content-between '>

            <div style={{ width: '400px' }} className="marcella">
              <h5 style={{ color: 'black', fontWeight: '600' }} className='d-flex'>MARCELLA</h5>
              <p>About</p>
              <p>Sustainability</p>
              <p>Design Philosophy</p>
              <p>Social Impact</p>
              <p>Fbric Guide</p>
              <p>Journals</p>


            </div>
            <div style={{ width: '400px' }} className="support">
              <h5 style={{ color: 'black', fontWeight: '600' }} className='d-flex'>SUPPORT</h5>
              <p>Contact Us</p>
              <p>Returns</p>
              <p>Help Centre Philosophy</p>
              <p> Refer a friend</p>

              <p>Reward a program</p>


            </div>
            <div style={{ width: '400px' }} className="shop">
              <h5 style={{ color: 'black', fontWeight: '600' }} className='d-flex'>SHOP</h5>
              <p>Shop all</p>
              <p>New  arrivals</p>
              <p>Best sellers</p>
              <p> Dresses</p>

              <p>Tops</p>
              <p>Shoes</p>


            </div>
            <div style={{ width: '400px' }} className="talk">
              <h5 style={{ color: 'black', fontWeight: '600' }} className='d-flex'>TALK TO US</h5>
              <p>We're here:</p>
              <p>Monday - Saturday, 9am - 5pm EST</p>
              <p>marcellastore@gmail.com</p>
              <p> VISIT OUR STORE</p>



            </div>

          </div>
          <div className='d-flex flex-column justify-content-evenly'>
            <div className='d-flex'>
              <input type="text" className='form-control me-1' placeholder='Email Id Please' />
              <button className='btn btn-dark' ><i className='fa-solid fa-arrow-right'></i></button>
            </div>
            <div style={{textAlign:'end',marginLeft:'90px'}} className='icons d-flex justify-content-around mt-3 '>
              <a href="https://react.dev/" target='-blank' style={{ textDecoration: 'none', color: 'white' }}> <i className='fa-brands fa-twitter fa-1x'></i></a>
              <a href="https://react.dev/" target='-blank' style={{ textDecoration: 'none', color: 'white' }}> <i className='fa-brands fa-instagram fa-1x'></i></a>

              <a href="https://react.dev/" target='-blank' style={{ textDecoration: 'none', color: 'white' }}> <i className='fa-brands fa-facebook fa-1x'></i></a>
            </div>
            <div style={{ textAlign: 'end' }}>
              <p style={{fontSize:'13px'}}>@2024 Marcella</p><img style={{ width: '60px', height: '60px' }} src="https://cdn.shopify.com/s/files/1/0930/7312/files/inc-5000-logo.png?v=1668750027" alt="" /></div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer