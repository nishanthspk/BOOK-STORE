import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button id='bt' className='item-center' style={{height:"50px"}} >Contact us</button>
        </div>
        <p style={{color:"white"}}>
"Embark on a literary journey with our book haven – where every page turns into an adventure!"</p>
            <p  style={{ color: 'white', marginBottom: '0' }}>Call At: 127-865-586-67</p>
      <p style={{ color: 'white', marginBottom: '0' }}>
      Copyright  &copy; {new Date().getFullYear()} By BookStore. <br/>All Rights Reserved.
      </p>
    </footer>
    </div>
  )
}

export default Footer