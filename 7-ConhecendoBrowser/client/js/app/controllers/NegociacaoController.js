class NegociacaoController {

    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(evento) {
        event.preventDefault();
        
        let data = new Date(this._inputData.value.split('-'));
        console.log(data);
    }
}