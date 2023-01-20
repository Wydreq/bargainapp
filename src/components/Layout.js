import HeaderNavBar from "./HeaderNavBar";
import React from "react";

const Layout = (props) => {
  return (
    <React.Fragment>
      <HeaderNavBar />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
