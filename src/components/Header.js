import trollFace from "../images/troll-face.png";

function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="troll-face" />
      <h3>Meme Generator</h3>
      <p>Create your own meme</p>
    </header>
  );
}

export default Header;
