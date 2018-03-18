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

fetch( 'https://jsonplaceholder.typicode.com/users' )
  .then( response => response.json() )
  .then( json => {
    console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.' );
    console.log(json);
  } )
  .catch( error => console.error( 'Something went wrong when fetching this data: ', error ) )
