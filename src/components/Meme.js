import React from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesPic = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesPic.length);
    const url = memesPic[randomNum].url;
    console.log(url);
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: url };
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeState) => ({
      ...prevMemeState,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Shut up"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="and take my money"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="memeImage" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
