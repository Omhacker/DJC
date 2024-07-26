// import React from 'react';
// import './ContactUs.css';

// const ContactUs = () => {
//   return (
//     <div className="contact-us" style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         width: '100vw',
//         padding:'10px 30px',
//     }}>
//       <div className="left-side" style={{ flex: 1, paddingRight: '20px' }}>
//         <h1 style={{
//           fontSize: '64px',
//           fontWeight: 'bold',
//           color: 'black'
//         }}>Contact Us</h1>
//         <p style={{
//           fontSize: '24px',
//           width: '55vw',
//           fontWeight: 'normal'
//         }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         <p style={{
//           fontSize: '24px',
//         }}>+44 987654321</p>
//         <p style={{
//           fontSize: '24px',
//         }}>+44 987654321</p>
//         <div className="icons" style={{ display: 'flex', gap: '5px'}}>
//           <button style={{backgroundColor:'transparent'}}><i className="fa fa-instagram" style={{ color: 'black' ,fontSize:'34px'}}></i></button>
//           <button style={{backgroundColor:'transparent'}}><i className="fa fa-facebook" style={{ color: 'black',fontSize:'34px' }}></i></button>
//           <button style={{backgroundColor:'transparent'}}><i className="fa fa-envelope" style={{ color: 'black',fontSize:'34px' }}></i></button>
//         </div>
//       </div>
//       <div className="right-side" style={{ flex: 1, textAlign: 'center' }}>
//         <img src="https://img.freepik.com/premium-vector/location-icon_942802-550.jpg" alt="Location" style={{ width: '100%', height: 'auto', maxWidth: '600px' }} />
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



// import React, { useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';
// import './ContactUs.css';

// mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2lqbmpqazdlMDBsdnRva284cWd3bm11byJ9.V6Hg2oYJwMAxeoR9GEzkAA'; // Replace with your Mapbox access token

// const ContactUs = () => {
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v11', // You can change the style to 'mapbox://styles/mapbox/satellite-v9' for a satellite view
//       center: [-0.1276, 51.5074], // Coordinates for the center of the UK (London)
//       zoom: 10
//     });

//     new mapboxgl.Marker()
//       .setLngLat([-0.1276, 51.5074]) // Marker coordinates
//       .addTo(map);
//   }, []);

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       backgroundColor: 'black',
//       width: '100vw',
//       padding: '10px 30px',
//       color: 'white' // Set text color to white
//     }}>
//       <div style={{ flex: 1, paddingRight: '20px' }}>
//         <h1 style={{
//           fontSize: '64px',
//           fontWeight: 'bold',
//           color: 'white' // Ensure the heading is white
//         }}>Contact Us</h1>
//         <p style={{
//           fontSize: '24px',
//           width: '55vw',
//           fontWeight: 'normal',
//           color: 'white' // Ensure the paragraph is white
//         }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//         <p style={{
//           fontSize: '24px',
//           color: 'white' // Ensure the phone number is white
//         }}>+44 987654321</p>
//         <p style={{
//           fontSize: '24px',
//           color: 'white' // Ensure the phone number is white
//         }}>+44 987654321</p>
//         <div style={{ display: 'flex', gap: '5px' }}>
//           <button style={{ backgroundColor: 'transparent' }}>
//             <i className="fa fa-instagram" style={{ color: 'white', fontSize: '34px' }}></i>
//           </button>
//           <button style={{ backgroundColor: 'transparent' }}>
//             <i className="fa fa-facebook" style={{ color: 'white', fontSize: '34px' }}></i>
//           </button>
//           <button style={{ backgroundColor: 'transparent' }}>
//             <i className="fa fa-envelope" style={{ color: 'white', fontSize: '34px' }}></i>
//           </button>
//         </div>
//       </div>
//       <div style={{ flex: 1, textAlign: 'center' }}>
//         <div id="map" style={{ width: '100%', height: '400px', borderRadius: '10px' }}></div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './ContactUs.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2lqbmpqazdlMDBsdnRva284cWd3bm11byJ9.V6Hg2oYJwMAxeoR9GEzkAA'; // Replace with your Mapbox access token

const ContactUs = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // You can change the style to 'mapbox://styles/mapbox/satellite-v9' for a satellite view
      center: [-0.1276, 51.5074], // Coordinates for the center of the UK (London)
      zoom: 10
    });

    new mapboxgl.Marker()
      .setLngLat([-0.1276, 51.5074]) // Marker coordinates
      .addTo(map);
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'black',
      width: '100vw',
      padding: '10px 30px',
      color: 'white'
    }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <h1 style={{
          fontSize: '64px',
          fontWeight: 'bold',
          color: 'white'
        }}>Contact Us</h1>
        <p style={{
          fontSize: '24px',
          width: '55vw',
          fontWeight: 'normal',
          color: 'white'
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p style={{
          fontSize: '24px',
          color: 'white'
        }}>+44 987654321</p>
        <p style={{
          fontSize: '24px',
          color: 'white'
        }}>+44 987654321</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
            <i className="fa fa-instagram" style={{ color: 'white', fontSize: '34px' }}></i>
          </button>
          <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
            <i className="fa fa-facebook" style={{ color: 'white', fontSize: '34px' }}></i>
          </button>
          <button style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
            <i className="fa fa-envelope" style={{ color: 'white', fontSize: '34px' }}></i>
          </button>
        </div>
      </div>
      <div style={{ flex: 1, textAlign: 'center' }}>
        <div id="map" style={{ width: '100%', height: '400px', borderRadius: '10px' }}></div>
      </div>
    </div>
  );
};

export default ContactUs;

