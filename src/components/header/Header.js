import React, { Fragment } from "react";
import MainHeader from "./MainHeader";

const Header = ({ children }) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Header;
