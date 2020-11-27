console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 19;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destínos possíveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1,1);
// } else if(estaAcompanhada){
//         console.log("Menor de idade mas esta acompanhada");
        
// } else{
//         console.log("Não é maior de idade, não posso vender");
// }

if(idadeComprador >= 18 || estaAcompanhada){
    console.log("Boa viagem")
    listaDeDestinos.splice(1,1);
} else{
        console.log("Não é maior de idade, não posso vender");
}


console.log("Embarque: \n\n");
if(idadeComprador > 18 && temPassagemComprada){
    console.log("Boa Viagem")
}else{
    console.log("Você não pode embarcar.")
}

console.log(listaDeDestinos);