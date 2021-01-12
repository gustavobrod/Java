import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor}from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Lais", 23684413200,"456");
const diretor = new Diretor("Gustavo", 10000, 123456);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Alline", 5000, 12345678901);
gerente.cadastrarSenha("123")

const clienteEstalogado = SistemaAutenticacao.login(cliente,456);
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 123);
const diretorEstaLogado = SistemaAutenticacao.login(diretor, 123456);

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstalogado);