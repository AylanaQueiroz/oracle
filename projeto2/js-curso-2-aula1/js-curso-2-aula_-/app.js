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


let numeroDoChute = document.querySelector('.container__input')



//ex1. 

function ola(){
    console.log('olá, mundo!')
}
ola()*/
 // ex2

 function ola(name) {

    console.log ('olá')

 }
ola()



let numeroSecreto = gerarUmNumeroAleatorio();
let numeroDoChute = document.querySelector('input').value;



function exibirTextoNaTela(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function gerarUmNumeroAleatorio() {

    return parseInt(Math.random() * 10 + 1)
    console.log(numeroSecreto)
}



function verificarChute() {

    let numeroDoChute = document.querySelector('input').value;
    numeroDoChute.value = ' ';


    //console.log('O número secreto é: ' + numeroSecreto)

    //console.log('O número que você chutou foi: ' + numeroChute)


    if (numeroDoChute == numeroSecreto) {

        alert("você acertou o número secreto: " + numeroSecreto)

    } else if (numeroDoChute > numeroSecreto) {

        alert("O número secreto é menor que " + numeroDoChute)

    } else {
        alert("O número secreto é maior que " + numeroDoChute)
    }
}







