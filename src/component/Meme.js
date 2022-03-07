import React from "react";
import "./Meme.css";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="Form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="Form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="Form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="Meme-container">
        <img className="Meme-image" src={meme.randomImage} alt="" />
        <h2 className="Meme-text top">{meme.topText}</h2>
        <h2 className="Meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
