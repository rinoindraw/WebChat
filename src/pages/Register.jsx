import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import add from "../assets/add.png";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    const formContainer = document.querySelector(".formWrapper");
    const cardContainer = document.querySelector(".card");

    formContainer.classList.add("loaded");
    cardContainer.classList.add("loaded");
  }, []);

  return (
    <div className="registerFormContainer">
      <div className="formWrapper">
        <span className="logo">Let's Register</span>
        <span className="title">
          Please register to get full experience from WebChat
        </span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Name ..." />
          <input required type="email" placeholder="Email ..." />
          <input required type="password" placeholder="Password ..." />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={add} alt="" />
            <span>Profile Picture</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You already have an account ?{" "}
          <Link to="/login" className="custom-link">
            Login
          </Link>
        </p>
      </div>
      <div className="img-wrapper">
        <div className="card"></div>
      </div>
    </div>
  );
};

export default Register;
