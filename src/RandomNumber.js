import React from "react";
import Piece1 from "./Piece2";
import Piece2 from "./Piece3";
import Piece3 from "./Piece3";
import Piece4 from "./Piece4";
import Piece5 from "./Piece5";
import Piece6 from "./Piece6";
import Piece7 from "./Piece7";
import Piece8 from "./Piece8";
import Piece9 from "./Piece9";
import Piece10 from "./Piece10";
import Piece11 from "./Piece11";
import Piece12 from "./Piece12";
import Piece13 from "./Piece13";
import Piece14 from "./Piece14";
import Piece15 from "./Piece15";
import Piece16 from "./Piece16";
import Piece17 from "./Piece17";
import Piece18 from "./Piece18";
import Piece19 from "./Piece19";
import Piece20 from "./Piece20";
import Piece21 from "./Piece21";
import Piece22 from "./Piece22";
import Piece23 from "./Piece23";
import Piece24 from "./Piece24";
import Piece25 from "./Piece25";
import Piece26 from "./Piece26";
import Piece27 from "./Piece27";

export default function RandomNumber() {
  let num = Math.floor(Math.random() * 27 + 1);

  switch (num) {
    case 1:
      return <Piece1 />;
      break;
    case 2:
      return <Piece2 />;
      break;
    case 3:
      return <Piece3 />;
      break;
    case 4:
      return <Piece4 />;
      break;
    case 5:
      return <Piece5 />;
      break;
    case 6:
      return <Piece6 />;
      break;
    case 7:
      return <Piece7 />;
      break;
    case 8:
      return <Piece8 />;
      break;
    case 9:
      return <Piece9 />;
      break;
    case 10:
      return <Piece10 />;
      break;
    case 11:
      return <Piece11 />;
      break;
    case 12:
      return <Piece12 />;
      break;
    case 13:
      return <Piece13 />;
      break;
    case 14:
      return <Piece14 />;
      break;
    case 15:
      return <Piece15 />;
      break;
    case 16:
      return <Piece16 />;
      break;
    case 17:
      return <Piece17 />;
      break;
    case 18:
      return <Piece18 />;
      break;
    case 19:
      return <Piece19 />;
      break;
    case 20:
      return <Piece20 />;
      break;
    case 21:
      return <Piece21 />;
      break;
    case 22:
      return <Piece22 />;
      break;
    case 23:
      return <Piece23 />;
      break;
    case 24:
      return <Piece24 />;
      break;
    case 25:
      return <Piece25 />;
      break;
    case 26:
      return <Piece26 />;
      break;
    case 27:
      return <Piece27 />;
      break;

    default:
      return <Piece1 />;
  }
}
