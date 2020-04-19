class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  imprimirSaldo () {
    return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

const cliente = new Cliente('Pedro', 2000);

// console.log(cliente.imprimirSaldo());

class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, tipo) {
    // va hacia el constructor padre
    super(nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
  }

  static bienvenida() {
    return `Bienvenido al cajero para empresas`;
  }
}

const empresa = new Empresa('Empresa1', 10000, 898998987, 'Construcción');

// console.log(empresa.imprimirSaldo());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
