import React from "react";
import Mandarava1 from "./img/Mandarava1.jpg";

export default function Piece2() {
  return (
    <div className="Piece2">
      <h1>Мандарава</h1>
      <br />
      <p>Принцеса Мандарава</p>
      <p>Божествена дочка царя Захора </p>
      <p>Цариця дакинь </p>
      <p>Тримачка таємної мантри </p>
      <p>Дакині Палтренма</p>
      <div>
        <img className="img-fluid" src={Mandarava1} alt="Mandarava1" />
      </div>
    </div>
  );
}
