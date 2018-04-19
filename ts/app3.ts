import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('velost', 3);
carro.acelerar()
carro.acelerar()

let moto = new Moto();
moto.acelerar()
moto.acelerar()

console.log(moto);
console.log(carro)

let concessionaria = new Concessionaria('', [])

console.log(concessionaria.fornecerHorariosDeFuncionamento())
