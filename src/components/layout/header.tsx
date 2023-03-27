import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex flex-row gap-2 font-semibold text-cyan-700">
        <Link to="/level1" className="hover:underline hover:cursor-pointer">
          Level 1
        </Link>
        &nbsp;|&nbsp;
        <Link to="/level2" className="hover:underline hover:cursor-pointer">
          Level 2
        </Link>
      </nav>
    </header>
  );
};

export default Header;
