// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faBagShopping } from "@fortawesome/free-solid-svg-icons";
// import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
// import Modal from "react-modal";
// import LoginModal from "./loginPage"; // Adjust the path as per your file structure
// import SignUpModal from "./SignUpModal"; // Adjust the path as per your file structure
// import logo from "./images/new_logo.png";
// import "./nav.css";

// function NavBar({ onLoginClick, onSignUpClick, likedItems }) {
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [isSignUpOpen, setIsSignUpOpen] = useState(false);

//   const openLoginModal = () => {
//     setIsLoginOpen(true);
//   };

//   const closeLoginModal = () => {
//     setIsLoginOpen(false);
//   };

//   const openSignUpModal = () => {
//     setIsSignUpOpen(true);
//   };

//   const closeSignUpModal = () => {
//     setIsSignUpOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img draggable="false" src={logo} alt="Logo" />
//         <p className="win">Diamond Jewellery Company</p>
//         <p className="mob">DJC</p>
//       </div>

//       <div className="icon">
//         <div className="search-bar">
//           <input type="text" placeholder="" />
//           <FontAwesomeIcon icon={faSearch} className="search-icon" />
//         </div>
//         {/* <span className="heart-icon">
//           <FontAwesomeIcon icon={faHeart} />
//           {likedItems.length > 0 && (
//             <span className="like-count">{likedItems.length}</span>
//           )}
//         </span> */}
//         <span>
//           <FontAwesomeIcon icon={faBagShopping} />
//         </span>
//         <span onClick={openLoginModal}>
//           <FontAwesomeIcon icon={faUser} />
//         </span>
//         <p className="username">username</p>
//       </div>

//       {/* Login Modal */}
//       <Modal
//         isOpen={isLoginOpen}
//         onRequestClose={closeLoginModal}
//         className="modal"
//         overlayClassName="overlay"
//       >
//         <LoginModal
//           isOpen={isLoginOpen}
//           onRequestClose={closeLoginModal}
//           onSignUpClick={openSignUpModal}
//         />
//       </Modal>

//       {/* Sign Up Modal */}
//       <Modal
//         isOpen={isSignUpOpen}
//         onRequestClose={closeSignUpModal}
//         className="modal"
//         overlayClassName="overlay"
//       >
//         <SignUpModal
//           isOpen={isSignUpOpen}
//           onRequestClose={closeSignUpModal}
//           onLoginClick={openLoginModal}
//         />
//       </Modal>
//     </nav>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import Modal from "react-modal";
import LoginModal from "./loginPage"; // Adjust the path as per your file structure
import SignUpModal from "./SignUpModal"; // Adjust the path as per your file structure
import logo from "./images/new_logo.png";
import "./nav.css";

function NavBar({ onLoginClick, onSignUpClick, likedItems }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img draggable="false" src={logo} alt="Logo" />
        <p className="win">Diamond Jewellery Company</p>
        <p className="mob">DJC</p>
      </div>

      <div className="icon">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <span>
          <FontAwesomeIcon icon={faHeart} />
          {likedItems.length > 0 && (
            <span className="like-count">{likedItems.length}</span>
          )}
        </span>
        <span>
          <FontAwesomeIcon icon={faBagShopping} />
        </span>
        <span onClick={openLoginModal}>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <p className="username">username</p>
      </div>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginOpen}
        onRequestClose={closeLoginModal}
        className="modal"
        overlayClassName="overlay"
      >
        <LoginModal
          isOpen={isLoginOpen}
          onRequestClose={closeLoginModal}
          onSignUpClick={openSignUpModal}
        />
      </Modal>

      {/* Sign Up Modal */}
      <Modal
        isOpen={isSignUpOpen}
        onRequestClose={closeSignUpModal}
        className="modal"
        overlayClassName="overlay"
      >
        <SignUpModal
          isOpen={isSignUpOpen}
          onRequestClose={closeSignUpModal}
          onLoginClick={openLoginModal}
        />
      </Modal>
    </nav>
  );
}

export default NavBar;
