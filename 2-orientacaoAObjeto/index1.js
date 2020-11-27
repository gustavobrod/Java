import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Gustavo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alline";
cliente2.cpf = 88822233309;

const contaCorrenteGustavo = new ContaCorrente();
contaCorrenteGustavo.agencia = 1001;

contaCorrenteGustavo.depositar(-100);
contaCorrenteGustavo.depositar(100);
contaCorrenteGustavo.depositar(50);

const valorSacado = contaCorrenteGustavo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteGustavo);
//console.log(cliente1);
// console.log(cliente2);