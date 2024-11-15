import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer style={{ backgroundColor: '#212529', padding: '30px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <button
            id='contact-btn'
            style={{
              height: '50px',
              padding: '0 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            onClick={() => alert('Contact us at: support@bookease.com')}
          >
            Contact Us
          </button>
        </div>
        <p style={{ color: 'white', fontSize: '18px', marginBottom: '5px' }}>
          "Dive into the world of books with Tales & Tomes – where every story finds its reader!"
        </p>
        <p style={{ color: 'white', marginBottom: '10px' }}>Reach Us: +91 9345444174 </p>
        <p style={{ color: 'white', marginBottom: '5px' }}>
          &copy; {new Date().getFullYear()} BookEase. All Rights Reserved.
        </p>
        <p style={{ color: 'white', fontSize: '12px' }}>
          Built with the MERN Stack | Empowering Readers and Sellers
        </p>
      </footer>
    </div>
  );
};

export default Footer;
