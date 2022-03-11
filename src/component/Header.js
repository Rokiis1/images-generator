import React from "react";
import "./Header.css";
import image from "../images/logo.png";

function Header() {
  return (
    <header className="Header-conatiner">
      <img className="Header-image" src={image} alt="img" />
      <h2 className="Header-title">Meme Generator</h2>
    </header>
  );
}

export default Header;
