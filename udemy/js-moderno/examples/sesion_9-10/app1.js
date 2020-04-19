function Cliente(nombre, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

// Crear un Prototype
Cliente.prototype.tipoCliente = function() {
  let tipo;
  if (this.saldo > 1000){
    tipo = 'Gold';
  } else if (this.saldo > 500) {
    tipo = 'Platinum';
  } else {
    tipo = 'Normal';
  }
  return tipo;
}

// Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo},
    Tipo Cliente: ${this.tipoCliente()}`;
}

// Retirar Saldo
Cliente.prototype.retirarSaldo = function(retiro) {
  return this.saldo -= retiro;
}

const cliente1 = new Cliente('Pedro', 100);
const cliente2 = new Cliente('Karen', 600);
const cliente3 = new Cliente('Miguel', 800);

cliente2.retirarSaldo(300);

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());
// console.log(cliente2);
// console.log(cliente3);


