import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import gundarLogo from "../assets/gundarsmall.png";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  // Add 'loaded' class to trigger the animation when the component mounts
  useEffect(() => {
    const formContainer = document.querySelector(".formWrapper");
    const cardContainer = document.querySelector(".card");

    formContainer.classList.add("loaded");
    cardContainer.classList.add("loaded");
  }, []);

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">WebChat</span>
        <span className="title">
          Welcome to an innovative and exciting platform !!
        </span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email ..." />
          <input type="password" placeholder="Password ..." />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You don't have an account ?{" "}
          <Link to="/register" className="custom-link">
            Register
          </Link>
        </p>
      </div>
      <div className="img-wrapper">
        <div className="card">
          <div className="img-inner">
            <img src={gundarLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
