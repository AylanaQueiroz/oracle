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
ola()
 // ex2
 
function fazerMake(tipodemake, adicionalPenteado){

const cliente = ("a cliente precisará de: "+ tipodemake + ' e ' + 'penteado: ' +adicionalPenteado);

return cliente;

}

const pedidoFinalCliente = fazerMake('semipreso', 'nãoooo');

console.log (pedidoFinalCliente);


//ex3 
 
function retornarDobro (numero){

const fraseNumero =  ('O dobro de  '+ numero +' é: '+ numero*2);

return fraseNumero;

}

const respostaNumero = retornarDobro(2);

console.log (respostaNumero)



function verificarFamilia(tempoDeCasamento, IdadeFilhos) {

    const familia = ('A família está casada há ' + tempoDeCasamento + 'e possui filhos com ' + IdadeFilhos + ' de idade');
    return familia
}

const familiaFinal = verificarFamilia('3 anos','2 meses');

console.log(familiaFinal)


//ex4
function verificarMedia(num1,num2,num3) {


const fraseMedia = ('a média dos números '+num1+' '+'+ '+ num2+' '+'+'+num3+' é igual a : '+ (num1+num2+num3)/3);

return fraseMedia

}

const parametrosdafunction = verificarMedia(4,6,8);

console.log(parametrosdafunction)







if (num1 > num2) {
    maiorNumero = num1
} else {
    maiorNumero = num2
}


//ex5

function retornarMaiorNumero(num1, num2) {

    const fraseMaiorNumero = ('O maior dos números entre ' + num1 + ' ' + ' e ' + num2 + ' é o número ' + num2);
   
    return fraseMaiorNumero;
}


const retornoComParametros = retornarMaiorNumero(4, 6)

console.log(retornoComParametros)



*/


let ListaNumeroSorteado = [];
let tamanhoLista =10;
let numeroSecreto = gerarUmNumeroAleatorio();
let numeroDoChute = document.querySelector('input').value;
let cont = 0;




function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirTextoNaTela('h1', 'Jogo do número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function gerarUmNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * tamanhoLista + 1);
    let quantidadeMaxima = ListaNumeroSorteado.length;
    if (quantidadeMaxima == tamanhoLista) {
        ListaNumeroSorteado = [];
    }


    if (ListaNumeroSorteado.includes(numeroEscolhido)) {
        return gerarUmNumeroAleatorio()
    } else {
        ListaNumeroSorteado.push(numeroEscolhido)
        console.log(ListaNumeroSorteado)
        return numeroEscolhido;
    }
}

console.log('o número secreto gerado aleatoriamente é ' + numeroSecreto)

function verificarChute() {
    let numeroDoChute = document.querySelector('input').value;
    /*let botaoIniciar = document.getElementById('reiniciar');*/
    cont++;

    if (numeroDoChute == numeroSecreto) {
        exibirTextoNaTela('p', 'Você acertou o número Secreto: ' + numeroSecreto + ' com ' + cont + ' tentativas');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDoChute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que: ' + numeroDoChute + ' você tentou até agora ' + cont + ' vezes');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que: ' + numeroDoChute + ' você tentou até agora ' + cont + ' vezes');
        } limparCampo()
    }
}

function limparCampo() {
    numeroDoChute = document.querySelector('input');
    numeroDoChute.value = ''
}

function novoJogo() {
    numeroSecreto = gerarUmNumeroAleatorio();
    limparCampo();
    exibirTextoNaTela('h1', 'Jogo do número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    cont = 0;
    console.log('NOVO NUMERO ALEATÓRIO GERADO' + numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true)

}
