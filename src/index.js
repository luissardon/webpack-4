import _ from 'lodash';

import './style.css';
import Picture from './picture.png';
import Data from './data.xml';

function component() {
  var element = document.createElement( 'div' );

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add( 'hello' );

  // Add the image to our existing div.
  var myPicture = new Image();
  myPicture.src = Picture;

  element.appendChild( myPicture );

  console.log( Data );

  return element;
}

document.body.appendChild( component() );
