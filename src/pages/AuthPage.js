import { useState } from "react";
import classes from "./AuthPage.module.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <div className={classes.authContainer}>
      <form onSubmit={submitHandler} className={classes.authForm}>
        <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
        <label for="username" className={classes.label}>
          Username
        </label>
        <input type="text" name="username" className={classes.input} />
        <label for="password" className={classes.label}>
          Password
        </label>
        <input type="password" name="password" className={classes.input} />
        <input
          type="submit"
          value={isLogin ? "Sign In" : "Sign Up"}
          className={classes.submit}
        />
      </form>
    </div>
  );
};

export default AuthPage;
