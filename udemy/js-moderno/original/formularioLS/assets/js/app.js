// Variables
const listaTweets = document.getElementById('lista-tweets');

// Event Listeners
eventListener();

function eventListener() {
  // Cuando se envía el formulario
  document.querySelector('#formulario').addEventListener('submit', agregarTweet);

  // Borrar tweet
  listaTweets.addEventListener('click', borrarTweet);

  // Contenido cargado
  document.addEventListener('DOMContentLoaded', localStorageListo);
}


// Funciones

// Añadir tweet del formulario
function agregarTweet(e) {
  e.preventDefault();
  console.log('Formulario enviado');
  // Leer el valor del text area
  const tweet = document.getElementById('tweet').value;
  console.log(tweet);
  // crear botón de eliminar
  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'borrar-tweet';
  botonBorrar.innerText = 'X';

  console.log(botonBorrar);

  // Crear elemento y agregar a la vista
  const li = document.createElement('li');
  li.innerText = tweet;

  console.log(li);
  
  // Añade el botón de borrar al tweet
  li.appendChild(botonBorrar);

  console.log(li, 'lleno');

  // Añade el tweet a la lista
  listaTweets.appendChild(li);
  console.log(listaTweets);

  // Añadir a local storage
  agregarTweetLocalStorage(tweet);
}

function borrarTweet(e) {
  e.preventDefault();
  if(e.target.className === 'borrar-tweet') {
    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.innerText);
  }
}

function agregarTweetLocalStorage(tweet) {
  let tweets;
  tweets = obtenerTweetsLocalStorage();
  // Añadir el nuevo tweet
  tweets.push(tweet);

  // Convertir de string a arreglo para local storage
  localStorage.setItem('tweets', JSON.stringify(tweets));

  // // Agregar a local storage
  // localStorage.setItem('tweets', tweet);
}

// Mostrar datos del localstorage en la lista
function localStorageListo() {
  let tweets;

  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet) {
      // crear botón de eliminar
      const botonBorrar = document.createElement('a');
      botonBorrar.classList = 'borrar-tweet';
      botonBorrar.innerText = 'X';

      // Crear elemento y agregar a la vista
      const li = document.createElement('li');
      li.innerText = tweet;

      // Añade el botón de borrar al tweet
      li.appendChild(botonBorrar);

      // Añade el tweet a la lista
      listaTweets.appendChild(li);
  });

}

function obtenerTweetsLocalStorage() {
  let tweets = 0;
  // Revisamos los valores de local storage
  if (localStorage.getItem('tweets') === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem('tweets'));
  }
  return tweets;
}

// Eliminar tweet en localstorage
function borrarTweetLocalStorage(tweet) {
  let tweets, tweetBorrar;

  // Elimina la x del tweet
  tweetBorrar = tweet.substring(0, tweet.length - 1);

  tweets = obtenerTweetsLocalStorage();

  tweets.forEach(function(tweet, index) {
    if(tweetBorrar === tweet) {
      tweets.splice(index, 1);
    }
  });
  
  localStorage.setItem('tweets', JSON.stringify(tweets));
}
