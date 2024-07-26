// src/components/SignUpModal.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import { Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import "./loginPage.css";

Modal.setAppElement("#root");

function SignUpModal({ isOpen, onRequestClose, onLoginClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign up logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="login-container">
        <button
          onClick={onRequestClose}
          className="close-button"
          style={{ marginLeft: "435px" }}
        >
          &times;
        </button>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "450px", marginTop: "8px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "450px", marginTop: "8px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <br />
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ width: "450px", marginTop: "8px" }}
            />
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
        <div className="social-login" style={{
          marginTop:'10px'
        }}>
          <Typography variant="body1" gutterBottom>
            <hr
              style={{
                display: "inline-block",
                color: "black",
                width: "160px",
                marginRight: "10px",
              }}
            />
            <span style={{ paddingBottom: "25px" }}>or</span> sign up with{" "}
            <hr
              style={{
                display: "inline-block",
                color: "black",
                width: "160px",
                marginLeft: "10px",
              }}
            />
          </Typography>
          <div className="social-icons">
            <Button
              className="social-button facebook-button"
              startIcon={<FacebookIcon />}
              style={{     marginLeft:'160px',border:'1px solid black', paddingLeft:'20px',color:'black'}}
            />
            <Button
              className="social-button google-button"
              startIcon={<GoogleIcon />}
              style={{     marginLeft:'10px',border:'1px solid black', paddingLeft:'20px',color:'black'}}
            />
          </div>
        </div>
        <hr style={{ width: "450px", color: "black" }} />
        <div className="signup-link">
          <Typography variant="body2">
            Already have an account?{" "}
            <span onClick={() => { onRequestClose(); onLoginClick(); }} style={{ cursor: "pointer", color: "black", fontWeight:'bold' }}>
              Log In
            </span>
          </Typography>
        </div>
      </div>
    </Modal>
  );
}

export default SignUpModal;

// ****************  IT IS FOR GOOGLE SIGING ******************


// // src/components/SignUpModal.jsx
// import React, { useState } from "react";
// import Modal from "react-modal";
// import { Button, Typography } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GoogleIcon from "@mui/icons-material/Google";
// import { signInWithGoogle } from "../components/firebase";
// import "./loginPage.css";

// Modal.setAppElement("#root");

// function SignUpModal({ isOpen, onRequestClose, onLoginClick }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle sign up logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Confirm Password:", confirmPassword);
//     onRequestClose();
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       className="modal"
//       overlayClassName="overlay"
//     >
//       <div className="login-container">
//         <button
//           onClick={onRequestClose}
//           className="close-button"
//           style={{ marginLeft: "435px" }}
//         >
//           &times;
//         </button>
//         <h1>Sign Up</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <br />
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               style={{ width: "450px", marginTop: "8px" }}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <br />
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               style={{ width: "450px", marginTop: "8px" }}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirm-password">Confirm Password</label>
//             <br />
//             <input
//               type="password"
//               id="confirm-password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               style={{ width: "450px", marginTop: "8px" }}
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Sign Up
//           </button>
//         </form>
//         <div className="social-login">
//           <Typography variant="body1" gutterBottom>
//             <hr
//               style={{
//                 display: "inline-block",
//                 color: "black",
//                 width: "160px",
//                 marginRight: "10px",
//               }}
//             />
//             <span style={{ paddingBottom: "25px" }}>or</span> sign up with{" "}
//             <hr
//               style={{
//                 display: "inline-block",
//                 color: "black",
//                 width: "160px",
//                 marginLeft: "10px",
//               }}
//             />
//           </Typography>
//           <div className="social-icons">
//             <Button
//               className="social-button google-button"
//               startIcon={<GoogleIcon />}
//               style={{ paddingLeft: "21px", margin: "5px" }}
//               onClick={() => { signInWithGoogle(); onRequestClose(); }}
//             />
//           </div>
//         </div>
//         <hr style={{ width: "450px", color: "black" }} />
//         <div className="signup-link">
//           <Typography variant="body2">
//             Already have an account?{" "}
//             <span onClick={() => { onRequestClose(); onLoginClick(); }} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
//               Log In
//             </span>
//           </Typography>
//         </div>
//       </div>
//     </Modal>
//   );
// }

// export default SignUpModal;
