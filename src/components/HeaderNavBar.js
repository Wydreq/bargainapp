import { NavLink } from "react-router-dom";
import classes from "./HeaderNavBar.module.css";

const HeaderNavBar = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={classes.logo}>BargainApp</div>
      </NavLink>
    </header>
  );
};

export default HeaderNavBar;
