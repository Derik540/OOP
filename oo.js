class Veiculo {
  constructor(marca, modelo, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
  }

  acelerar() {
    throw new Error("Método 'acelerar' deve ser implementado");
  }
}

class Aviao extends Veiculo {
  constructor(marca, modelo, cor) {
    super(marca, modelo, cor);
  }

  voar() {
    console.log("O Avião está voando");
  }
}

class Motocicleta extends Veiculo {
  constructor(marca, modelo, cor) {
    super(marca, modelo, cor);
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, cor) {
    super(marca, modelo, cor);
  }
}

let aviao1 = new Aviao("Boeing", "747", "branco");
let moto1 = new Motocicleta("Honda", "CBR 1000RR", "preto");
let carro1 = new Carro("Fiat", "Palio", "vermelho");

console.log(aviao1);
console.log(moto1);
console.log(carro1);
