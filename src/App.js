// import Mandarava_FULL from "./Mandarava_FULL.js";
// import Mandarava from "./img/Mandarava.png";
import Piece1 from "./Piece1.js";
// import RandomNuber from "./RandomNumber";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <a
        href="https://marynamarkova.github.io/Mandarava-ua/"
        className="icon"
        title="Go Home"
      >
        <i className="fa-solid fa-house"></i>
      </a>
      <div className="Container">
        {/* <div className="Mandarava">
          <img className="img-fluid" src={Mandarava} alt="Mandarava" />
        </div>{" "} */}
        {/* <Mandarava_FULL /> */}
        {/* <RandomNuber /> */}
        <Piece1 />
        <div className="Author">
          <p>Падмасамбгава </p>
          <p>«Життя й звільнення принцеси Мандарави»</p>
        </div>
      </div>
      <footer>
        <p>
          <a
            href="https://github.com/MarynaMarkova/Bardo/tree/master"
            className="profileLink"
            target="_blank"
            rel="noreferrer"
            title="Github code"
          >
            Open-source
          </a>
          {" by "}
          <a
            href="https://marynamarkova.github.io/"
            className="profileLink"
            target="_blank"
            rel="noreferrer"
            title="Personal page"
          >
            Maryna Markova
          </a>
        </p>
        <p className="PhotoBy PhotoInside">
          Photo "Starry Night" by{" "}
          <a href="https://unsplash.com/@weirick?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Jake Weirick
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/XL0SE4rtRwg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  );
}
