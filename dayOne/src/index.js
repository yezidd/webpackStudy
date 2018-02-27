
import Print from './print';

function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hell3333o', 'webpack'], ' ');
    element.onclick = Print.bind(null, 'Hello webpack!');
    return element;

  }).catch(error => 'An error2 occurred while loading the component');
}

getComponent().then(component => {
  document.body.appendChild(component);
});