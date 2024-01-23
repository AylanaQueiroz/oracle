/*//exercício 2
let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do desafio'

//exercício 3
function novoJogo() {
    console.log('clicou no Novo Jogo')
}

//exercicio 4
function alert(){

    alert ('eu amo Js')
}

//exercício 5 
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'

*/

let numeroSecreto = gerarUmNumeroAleatorio();


function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function gerarUmNumeroAleatorio(){

 return parseInt(Math.random() * 10 +1)

}


function verificarChute() {

    console.log(numeroSecreto)
}






