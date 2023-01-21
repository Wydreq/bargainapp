import { Link, NavLink } from "react-router-dom";
import classes from "./HeaderNavBar.module.css";

const HeaderNavBar = () => {
  return (
    <header className={classes.header}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={classes.logo}>BargainApp</div>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/auth" style={{ textDecoration: "none" }}>
              <span className={classes.navLink}>Sign in</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth" style={{ textDecoration: "none" }}>
              <span className={classes.navLink}>Add Bargain</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
