import React from "react";
import "./Header.css";
import image from "../images/image.png";

function Header() {
  return (
    <header className="Header-conatiner">
      <img className="Header-image" src={image} alt="img" />
      <h2 className="Header-title">Meme Generator</h2>
      <h4 className="Header-project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;
