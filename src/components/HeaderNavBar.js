import { Link, NavLink } from "react-router-dom";
import classes from "./HeaderNavBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const HeaderNavBar = () => {
  const authToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(
      authActions.setToken({
        token: null,
      })
    );
  };

  return (
    <header className={classes.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={classes.logo}>BargainApp</div>
      </Link>
      <nav>
        <ul>
          {!authToken && (
            <li>
              <NavLink to="/auth" style={{ textDecoration: "none" }}>
                <span className={classes.navLink}>Sign in</span>
              </NavLink>
            </li>
          )}
          <li>
            <NavLink to="/auth" style={{ textDecoration: "none" }}>
              <span className={classes.navLink}>Add Bargain</span>
            </NavLink>
          </li>
          {authToken && (
            <li>
              <button onClick={logoutHandler} className={classes.logoutBtn}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
