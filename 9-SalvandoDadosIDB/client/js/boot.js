import {NegociacaoController} from './app/controllers/NegociacaoController';
import {} from './app/polyfill/fetch';

let negociacaoController = new negociacaoController();

document.querySelector('.form').onSubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController);