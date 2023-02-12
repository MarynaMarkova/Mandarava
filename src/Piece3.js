import React from "react";
import Mandarava2 from "./img/Mandarava2.jpg";

export default function Piece3() {
  return (
    <div className="Piece3">
      <h1>Мантра Мандарави</h1>
      <br />
      <div className="Prayer">
        <p>Намо Шрі Магадеві Дакині!</p>
      </div>
      <div>
        <img className="img-fluid" src={Mandarava2} alt="Mandarava2" />
      </div>
    </div>
  );
}
