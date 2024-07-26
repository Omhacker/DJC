import React, { useState } from "react";
import Modal from "react-modal";
import { Button, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import "./loginPage.css";

Modal.setAppElement("#root");

function LoginModal({ isOpen, onRequestClose, onSignUpClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
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
        <button onClick={onRequestClose} className="close-button">
          ×
        </button>
        <h1>Login</h1>
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
            <br />
            <a
              href="/forgot-password"
              className="forgot-password"
            >
              Forgot password?
            </a>
          </div>
          <button type="submit" className="login-button">
            Login
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
                width: "170px",
                marginRight: "10px",
              }}
            />
            <span style={{ paddingBottom: "25px" }}>or</span> sign in with
            <hr
              style={{
                display: "inline-block",
                color: "black",
                width: "170px",
                marginLeft: "10px",
              }}
            />
          </Typography>
          <div className="social-icons">
            <Button
              className="social-button facebook-button"
              startIcon={<FacebookIcon style={{ color: "black" }} />}
              style={{     marginLeft:'160px',border:'1px solid black', paddingLeft:'20px'}}
            />
            <Button
              className="social-button google-button"
              startIcon={<GoogleIcon style={{ color: "black" }} />}
              style={{     marginLeft:'10px',border:'1px solid black', paddingLeft:'20px'}}
            />
          </div>
        </div>
        <hr style={{ width: "450px", color: "black" }} />
        <div className="signup-link">
          <Typography variant="body2">
            Don't have an account?{" "}
            <span
              onClick={() => {
                onRequestClose();
                onSignUpClick();
              }}
              style={{ cursor: "pointer", color: "black", fontWeight: "bold" }}
            >
              Sign Up
            </span>
          </Typography>
        </div>
      </div>
    </Modal>
  );
}

export default LoginModal;




// ****************  IT IS FOR GOOGLE SIGING ******************


// src/components/LoginModal.jsx
// import React, { useState } from "react";
// import Modal from "react-modal";
// import { Button, Typography } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GoogleIcon from "@mui/icons-material/Google";
// import { signInWithGoogle } from "../components/firebase";
// import "./loginPage.css";

// Modal.setAppElement("#root");

// function LoginModal({ isOpen, onRequestClose, onSignUpClick }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle login logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
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
//         <h1>Login</h1>
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
//             <br />
//             <a
//               href="/forgot-password"
//               className="forgot-password"
//               style={{ marginLeft: "325px", textDecoration: "none", fontSize: "12px" }}
//             >
//               Forgot password?
//             </a>
//           </div>
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//         <div className="social-login">
//           <Typography variant="body1" gutterBottom>
//             <hr style={{ display: "inline-block", color: "black", width: "160px", marginRight: "10px" }} />
//             <span style={{ paddingBottom: "25px" }}>or</span> sign in with
//             <hr style={{ display: "inline-block", color: "black", width: "160px", marginLeft: "10px" }} />
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
//             Don't have an account?{" "}
//             <span onClick={() => { onRequestClose(); onSignUpClick(); }} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>
//               Sign Up
//             </span>
//           </Typography>
//         </div>
//       </div>
//     </Modal>
//   );
// }

// export default LoginModal;
