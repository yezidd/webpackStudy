import _ from 'lodash'
import "./common/style.css";

function component() {
  var divDom = document.createElement("div");
  divDom.innerHTML = ['hello', 'webpack'].join("-");
  var pDom = document.createElement("p");
  pDom.innerText = _.join(['hello', 'world'], "=");
  divDom.appendChild(pDom);
  return divDom;
}

document.body.appendChild(component());