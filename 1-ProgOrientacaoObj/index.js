import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Gustavo", 11122233309);

const cliente2 = new Cliente("Alline", 88822233309);
//console.log(cliente2);

const contaCorrenteGustavo = new ContaCorrente(cliente1, 1001);
contaCorrenteGustavo.depositar(500);

const conta2 = new ContaCorrente(cliente2, 102);

contaCorrenteGustavo.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);