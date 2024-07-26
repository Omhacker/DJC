// // import { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// // import './App.css';
// // import NavBar from './components/NavBar';
// // import Home from './components/Home';
// // import Featured from './components/Featured';
// // import Category from './components/Category';
// // import Review from './components/Review';
// // import Preloader from './components/Preloader';
// // import Service from './components/Service';
// // import Footer from './components/Footer';
// // import LoginModal from './components/loginPage';
// // import SignUpModal from './components/SignUpModal';
// // import ContactUs from './components/ContactUs';
// // import Page2 from './components/Page2';
// // import Page3 from './components/Page3';

// // function App() {
// //   const [loginModalOpen, setLoginModalOpen] = useState(false);
// //   const [signUpModalOpen, setSignUpModalOpen] = useState(false);
// //   const [showPreloader, setShowPreloader] = useState(true);
// //   const [likedItems, setLikedItems] = useState([]);
// //   const location = useLocation();

// //   const handleLoginClick = () => {
// //     setLoginModalOpen(true);
// //   };

// //   const handleSignUpClick = () => {
// //     setSignUpModalOpen(true);
// //   };

// //   const closeModals = () => {
// //     setLoginModalOpen(false);
// //     setSignUpModalOpen(false);
// //   };

// //   const addLike = (ring) => {
// //     setLikedItems((prevLikedItems) => {
// //       if (prevLikedItems.some(item => item.id === ring.id)) {
// //         return prevLikedItems.filter(item => item.id !== ring.id);
// //       }
// //       return [...prevLikedItems, ring];
// //     });
// //   };

// //   useEffect(() => {
// //     // Show preloader on initial load
// //     setShowPreloader(true);

// //     // Hide preloader after 4 seconds (or adjust the time as needed)
// //     const timer = setTimeout(() => {
// //       setShowPreloader(false);
// //     }, 4000);

// //     return () => clearTimeout(timer);
// //   }, [location.pathname]);

// //   return (
// //     <>
// //       {showPreloader && location.pathname !== '/page2' && <Preloader />}
// //       <NavBar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} likedItems={likedItems} />
// //       <div>
// //         <Routes>
// //           <Route path="/" element={
// //             <>
// //               <Home />
// //               <Service />
// //               <Featured />
// //               <Category />
// //               <ContactUs />
// //               <Review />
// //             </>
// //           } />
// //           <Route path="/page2" element={<Page2 addLike={addLike} />} />
// //           <Route path="/product/:id" element={<Page3 />} />
// //         </Routes>
// //       </div>
// //       <Footer />
// //       <LoginModal isOpen={loginModalOpen} onRequestClose={closeModals} onSignUpClick={handleSignUpClick} />
// //       <SignUpModal isOpen={signUpModalOpen} onRequestClose={closeModals} onLoginClick={handleLoginClick} />
// //     </>
// //   );
// // }

// // function MainApp() {
// //   return (
// //     <Router>
// //       <App />
// //     </Router>
// //   );
// // }

// // export default MainApp;

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import Featured from './components/Featured';
// import Category from './components/Category';
// import Review from './components/Review';
// import Preloader from './components/Preloader';
// import Service from './components/Service';
// import Footer from './components/Footer';
// import LoginModal from './components/loginPage';
// import SignUpModal from './components/SignUpModal';
// import ContactUs from './components/ContactUs';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

// function App() {
//   const [loginModalOpen, setLoginModalOpen] = useState(false);
//   const [signUpModalOpen, setSignUpModalOpen] = useState(false);
//   const [showPreloader, setShowPreloader] = useState(true);
//   const [likedItems, setLikedItems] = useState([]);
//   const location = useLocation();

//   const handleLoginClick = () => setLoginModalOpen(true);
//   const handleSignUpClick = () => setSignUpModalOpen(true);
//   const closeModals = () => {
//     setLoginModalOpen(false);
//     setSignUpModalOpen(false);
//   };

//   const addLike = (ring) => {
//     setLikedItems((prevLikedItems) => {
//       if (prevLikedItems.some(item => item.id === ring.id)) {
//         return prevLikedItems.filter(item => item.id !== ring.id);
//       }
//       return [...prevLikedItems, ring];
//     });
//   };

//   useEffect(() => {
//     // Show preloader on initial load
//     setShowPreloader(true);

//     // Hide preloader after 4 seconds (or adjust the time as needed)
//     const timer = setTimeout(() => setShowPreloader(false), 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (location.pathname === '/product/:id') {
//       // Stop any ongoing animations here
//       // Example: document.getElementById('animation-element').style.animation = 'none';
//       // This is where you would stop your animation, depending on how it's implemented.
//     } else {
//       // Restart or reset the animation if needed
//       // Example: document.getElementById('animation-element').style.animation = '';
//     }

//     return () => {
//       // Cleanup any animations or intervals
//       // Example: clearInterval(animationInterval);
//     };
//   }, [location.pathname]);

//   return (
//     <>
//       {showPreloader && location.pathname !== '/page2' && <Preloader />}
//       <NavBar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} likedItems={likedItems} />
//       <div>
//         <Routes>
//           <Route path="/" element={
//             <>
//               <Home />
//               <Service />
//               <Featured />
//               <Category />
//               <ContactUs />
//               <Review />
//             </>
//           } />
//           <Route path="/page2" element={<Page2 addLike={addLike} />} />
//           <Route path="/product/:id" element={<Page3 />} />
//         </Routes>
//       </div>
//       <Footer />
//       <LoginModal isOpen={loginModalOpen} onRequestClose={closeModals} onSignUpClick={handleSignUpClick} />
//       <SignUpModal isOpen={signUpModalOpen} onRequestClose={closeModals} onLoginClick={handleLoginClick} />
//     </>
//   );
// }

// function MainApp() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// export default MainApp;

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Featured from './components/Featured';
import Category from './components/Category';
import Review from './components/Review';
import Preloader from './components/Preloader';
import Service from './components/Service';
import Footer from './components/Footer';
import LoginModal from './components/loginPage';
import SignUpModal from './components/SignUpModal';
import ContactUs from './components/ContactUs';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [likedItems, setLikedItems] = useState([]);
  const location = useLocation();

  const handleLoginClick = () => setLoginModalOpen(true);
  const handleSignUpClick = () => setSignUpModalOpen(true);
  const closeModals = () => {
    setLoginModalOpen(false);
    setSignUpModalOpen(false);
  };

  const addLike = (ring) => {
    setLikedItems((prevLikedItems) => {
      if (prevLikedItems.some(item => item.id === ring.id)) {
        return prevLikedItems.filter(item => item.id !== ring.id);
      }
      return [...prevLikedItems, ring];
    });
  };

  useEffect(() => {
    // Show preloader on initial load
    setShowPreloader(true);

    // Hide preloader after 4 seconds (or adjust the time as needed)
    const timer = setTimeout(() => setShowPreloader(false), 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const animationElement = document.getElementById('animation-element');
    if (!animationElement) return;

    if (location.pathname === '/') {
      // Show animation on homepage
      animationElement.style.display = 'block';
    } else {
      // Hide animation on other pages
      animationElement.style.display = 'none';
    }
  }, [location.pathname]);

  return (
    <>
      {showPreloader && location.pathname !== '/page2' && <Preloader />}
      <NavBar onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} likedItems={likedItems} />
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Service />
              <Featured />
              <Category />
              <ContactUs />
              <Review />
            </>
          } />
          <Route path="/page2" element={<Page2 addLike={addLike} />} />
          <Route path="/product/:id" element={<Page3 />} />
        </Routes>
      </div>
      <Footer />
      <LoginModal isOpen={loginModalOpen} onRequestClose={closeModals} onSignUpClick={handleSignUpClick} />
      <SignUpModal isOpen={signUpModalOpen} onRequestClose={closeModals} onLoginClick={handleLoginClick} />
    </>
  );
}

function MainApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default MainApp;
