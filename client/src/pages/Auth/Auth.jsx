import React, { useState } from "react";
import "./Auth.css";
import { signin, signup } from "../../Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.user);
  const [userName, setUserName] = useState(currentUser?.data);

  const handleSubmit = (e) => {
    e.preventDefault();
setIsSignIn(false);
    if (isSignIn) {
      if (!name) {
        alert("Enter name");
      }
      if (!email) {
        alert("Enter your email");
      }
      if (!password) {
        alert("Enter your password");
      }

      console.log(email, password);
      dispatch(signin({ name, email, password }, navigate));
    } else {
      if (password !== confirmPassword) {
        alert("Match the Confirm Password");
      } else {
        console.log(email, password, confirmPassword);
        dispatch(signup({ name, email, password, confirmPassword }, navigate));
      }
    }
  };

  return (
    <div className="background">
      <div className="auth-container">
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Display Name:</label>
            <input
            className="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isSignIn && (
            <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-group">
            <button type="submit" className="login-button">
              { isSignIn ? "Log In" : "Sign Up"}
            </button>
          </div>
        </form>
        <p>
          {userName ? (
            `Logged in as ${userName}`
          ) : (
            isSignIn
            ? "Don't have an account?"
            : "Already have an account?"
          )}{" "}
          {userName ? (
            <button
              className="toggle-button"
              onClick={() => {
                setUserName(null);
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className="toggle-button"
              onClick={() => {
                setIsSignIn(!isSignIn);
              }}
            >
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default Auth;
