import Print from './print';

function component() {
  var element = document.createElement( 'div' );
  var button = document.createElement( 'button' );
  var br = document.createElement( 'br' );

  button.innerHTML = 'Click me and look at the console!';
  element.innerHTML = join( [ 'Hello', 'webpack' ], ' ' );
  element.appendChild(br);
  element.appendChild(button);

  button.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}

document.body.appendChild( component() );

if ( 'serviceWorker' in navigator ) {
  window.addEventListener( 'load', () => {
    navigator.serviceWorker
      .register( '/service-worker.js' )
      .then( registration => {
        console.log( 'SW registered: ', registration );
      } )
      .catch( registrationError => {
        console.log( 'SW registration failed: ', registrationError );
      } );
  } );
}
