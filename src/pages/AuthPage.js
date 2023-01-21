import { useState, useRef } from "react";
import classes from "./AuthPage.module.css";
import { authActions } from "../store/auth-slice";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const changeModeHandler = () => {
    setIsLogin(!isLogin);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEHAJzOBZlQOR3oGthLf_PT2q7fgPlsy0";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEHAJzOBZlQOR3oGthLf_PT2q7fgPlsy0";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        if (isLogin) {
          dispatch(
            authActions.setToken({
              token: data.idToken,
            })
          );
        }
        redirect("/");
      });
  };

  return (
    <div className={classes.authContainer}>
      <form className={classes.authForm}>
        <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
        <label for="E-mail" className={classes.label}>
          E-mail
        </label>
        <input
          type="email"
          name="E-mail"
          className={classes.input}
          required
          ref={emailInputRef}
        />
        <label for="password" className={classes.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          className={classes.input}
          required
          ref={passwordInputRef}
        />
        <div className={classes.submit} onClick={submitHandler}>
          {!isLoading ? (
            "Submit"
          ) : (
            <ThreeDots
              height="40"
              width="40"
              radius="9"
              color="orange"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          )}
        </div>
        <button className={classes.changeBtn} onClick={changeModeHandler}>
          {isLogin
            ? "You dont have an account? Sign Up!"
            : "You already have an account? Sign In"}
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
