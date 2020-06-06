import _ from 'lodash';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
require ('./style.css');
require ("./main.scss");
require("./post-css.css");
import Icon from './assets/icon.png';
import IconSvg from './assets/webpack.svg';
import dataJson from './data/data-json.json';
import DataXml from './data/data-xml.xml';
import printMe from './print.js';

var moment = require('moment');
moment().format();
console.log('moment', moment);


var march = moment('2017-03')
console.log('default', march.format('MMMM')) // 'March'


moment.locale('de') // returns the new locale, in this case 'de'
console.log('still Default', march.format('MMMM')) // 'March' still, since the instance was before the locale was set


var deMarch = moment('2017-03')
console.log('de', deMarch.format('MMMM')) // 'März'


// You can, however, change just the locale of a specific moment
march.locale('es')
console.log('es', march.format('MMMM')) // 'Marzo'


// You can, however, change just the locale of a specific moment
// --- this will work ---
march.locale('ru')
console.log('ru', march.format('MMMM')) // 'Marzo'

// var foo = bar;

const component = () => {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // Add JSON and XML files
  console.log('json data:', dataJson['members'][1]['powers'][2]);
  console.log('xml data:', DataXml);

  // Add JSON and XML files
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');
  element.classList.add('wrapper');

  // Add the icons to our existing div.
  var awesomeIcon = document.createElement('i');
  awesomeIcon.setAttribute('class', 'fas fa-camera');

  // Add the images to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  const myIconSvg = new Image();
  myIconSvg.src = IconSvg;

  element.appendChild(awesomeIcon);
  element.appendChild(btn);

  element.appendChild(myIcon);
  element.appendChild(myIconSvg);
  return element;
}

document.body.appendChild(component());
