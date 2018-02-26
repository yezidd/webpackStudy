import _ from 'lodash'
import "./common/style.css";
import header from "./common/img/header.jpg";

function component() {
  var divDom = document.createElement("div");
  divDom.innerHTML = ['hello', 'webpack'].join("-");
  var imgDom = new Image();
  imgDom.src = header;

  var pDom = document.createElement("p");
  pDom.innerText = _.join(['hello', 'world'], "=");

  divDom.appendChild(pDom);
  divDom.appendChild(imgDom);
  return divDom;
}

document.body.appendChild(component());