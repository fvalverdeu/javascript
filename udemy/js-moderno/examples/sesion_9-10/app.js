// Object literal

// const cliente = {
//   nombre: 'Juan',
//   saldo: 1200,
//   tipoCliente: function() {
//     let tipo;
//     if (this.saldo > 1000){
//       tipo = 'Gold';
//     } else if (this.saldo > 500) {
//       tipo = 'Platinum';
//     } else {
//       tipo = 'Normal';
//     }
//     return tipo;
//   }
// }

// console.log(cliente.tipoCliente());

// Método alternativo

// function Cliente(nombre, saldo) {
//   this.nombre = nombre;
//   this.saldo = saldo;
//   this.tipoCliente = function(edad) {
//     let tipo;
//     if (this.saldo > 1000){
//       tipo = 'Gold';
//     } else if (this.saldo > 500) {
//       tipo = 'Platinum';
//     } else {
//       tipo = 'Normal';
//     }
//     return tipo;
//   }
// }

// const persona = new Cliente('Pedro', 20000);
// const persona2 = new Cliente('Karen', 6000);

// console.log(persona2.tipoCliente());

// String
const nombre1 = 'Pedro';
const nombre2 = new String('Pedro');

// console.log(typeof nombre1);
// console.log(nombre2);

// if (nombre1 === nombre2) {
//   console.log('Sí, son iguales');
// } else {
//   console.log('No, no son iguales');
// }

// Números
const numero1 = 20;
const numero2 = new Number(20);

// Booleanos
const boolean1 = true;
const boolean2 = new Boolean(true);

// Funciones
const function1 = function(a,b) {
  return a + b;
}

const function2 = new Function('a', 'b', 'return 1 + 2');

// console.log(function1(2,3));
// console.log(function2(1,2));

// Objetos
// const persona1 = {
//   nombre: 'Juan'
// }

// const persona2 = new Object({nombre: 'Juan'})

// // Arreglos
// const arreglo1 = [1,2,3,4];

// const arreglo2 = new Array(1,2,3,4)


// console.log(arreglo1);
// console.log(arreglo2);