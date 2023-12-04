import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
      <Link
        className="socialBox"
        href="https://github.com/rinoindraw/WebChat"
        // target="_blank"
        rel="noopener noreferrer"
        to="/banner"
      >
        Go To AboutPage
        <ArrowRightCircle size={25} />
      </Link>
      {/* <Link to="/banner">Show Banner</Link> */}
    </div>
  );
};

export default Sidebar;
