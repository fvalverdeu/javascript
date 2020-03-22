// let nombre = prompt('¿Cuál es tu nombre?');
// let edad = prompt('¿Cuál es tu edad?');

// document.getElementById('app').innerHTML = `
//   Bienvenido ${nombre} de ${edad} años.
// `;

function saludar () {
  let nombre = document.getElementById('nombre').value;
  alert(`Bienvenido ${nombre}`);
}

function calcularDiasVida () {
  let fechaNacimiento = document.getElementById('fecnac').value;
  const msDay = 1000*60*60*24;
  let today = new Date();
  let nacimiento = new Date(fechaNacimiento);
  let diff = today - nacimiento;
  alert(`Usted tiene: ${Math.floor(diff/msDay)} días vividos.`);
  // console.log(fechaNacimiento, 'fecha nacimiento');
  // console.log(msDay, 'duración de un día en ms');
  // console.log(today, 'fecha actual');
  // console.log(nacimiento, 'nacimiento');
}

// crear variables
// var nombre = 'Juan', carrito = 'libro1';
// console.log(nombre);
// console.log(carrito);
// console.log(nombre, carrito);
// console.log(nombre + ': producto => ' + carrito);
// console.table([nombre, carrito]);
// console.table([{nombre, carrito}]);
// console.table({nombre, carrito});

// // comparación
// const numero1 = 10;
//       numero2 = '50';
// console.log(numero1 + numero2);
// console.log(numero2 + numero1);

// const producto1 = 'Pizza';
//       precio1 = 30;
//       producto2 = 'Hamburguesa';
//       precio2 = 40;

// html = `
//   <ul>
//     <li>Orden: ${producto1}</li>
//     <li>Precio: ${precio1}</li>
//     <li>Orden: ${producto2}</li>
//     <li>Precio: ${precio2}</li>
//     <li>Total: ${total(precio1, precio2)}</li>
//   </ul>
// `;

// function total(precio1, precio2) {
//   return precio1 + precio2;
// }

// document.getElementById('app').innerHTML = html;

// const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
// const ordenes = new Set([123, 231, 131, 102]);
// const datos = new Map();
// datos.set('nombre', 'Juan');
// datos.set('profesión', 'Desarrollador Web');

// for (const entrada of ciudades) {
//   console.log(entrada);
// }

// for (const entrada of ciudades.entries()) {
//   console.log(entrada);
// }

// for (let entrada of ordenes.entries()) {
//   console.log(entrada);
// }

// for (const entrada of datos.entries()) {
//   console.log(entrada);
// }

// console.log('============ values ===========');

// for (const entrada of ciudades.values()) {
//   console.log(entrada);
// }

// for (let entrada of ordenes.values()) {
//   console.log(entrada);
// }

// for (const entrada of datos.values()) {
//   console.log(entrada);
// }

// console.log('============ keys ===========');

// for (const entrada of ciudades.keys()) {
//   console.log(entrada);
// }

// for (let entrada of ordenes.keys()) {
//   console.log(entrada);
// }

// for (const entrada of datos.keys()) {
//   console.log(entrada);
// }

// const enlaces = document.getElementsByTagName('a');

// for (let enlace of enlaces) {
//   console.log(enlace.href);
// }

// window.location.href = 'http://twitter.com';

// let option = confirm('Desea ver la página anterior?');
// if (option) window.history.go(-2);
// if (option) console.log(window.history.go(-2));

// let ubicacion;
// ubicacion = window.navigator;

// console.log(ubicacion);

// var a = 'a';
// let b = 'b';
// const c = 'c';

// function functionScope() {
//   var a = 'A';
//   let b = 'B';
//   const c = 'C';
//   console.log('FUNCTION: ' + a, b, c);
// }

// functionScope();

// if(true) {
//   var a = 'AA';
//   let b = 'BB';
//   const c = 'CC';
//   console.log('BLOQUE: ' + a, b, c);
// }

// for(let a = 0; a < 10; a++){
//   console.log(a);
// }

// console.log('GLOBAL: ' + a, b, c);

let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[1];
let forms = document.forms;

console.log(elemento);
console.log(Array.from(forms));
