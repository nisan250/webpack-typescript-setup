// import _ from 'lodash';
// import './style.css';
// import Icon from './assets/icon.png';
// import IconSvg from './assets/webpack.svg';
// import dataJson from './data/data-json.json';
// import DataXml from './data/Data-xml.xml';
import printMe from './print.js';
import { cube } from './math.js';


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  // const element = document.createElement('div');
  // const btn = document.createElement('button');
  const element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.classList.add('wrapper');

  // Add the images to our existing div.
  // const myIcon = new Image();
  // myIcon.src = Icon;

  // const myIconSvg = new Image();
  // myIconSvg.src = IconSvg;

  // Add JSON and XML files
  // console.log('json data:', dataJson['members'][1]['powers'][2]);
  // console.log('xml data:', DataXml);

  // Add JSON and XML files
  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);

  // element.appendChild(myIcon);
  // element.appendChild(myIconSvg);
  return element;
}

document.body.appendChild(component());
