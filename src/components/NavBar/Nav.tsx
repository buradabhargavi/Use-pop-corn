import React from "react";
import "../popcorn.css";
import Search from "./Search";
import Logo from "./Logo";

function Nav({ children }: any) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}

export default Nav;
