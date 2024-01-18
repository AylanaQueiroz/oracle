/*alert('Seja bem-vindo ao jogo');





let numeroSecreto = parseInt(Math.random() * 100 + 1 )

let numeroChute;

let tentativas = 1;

while (numeroSecreto != numeroChute) {
    numeroChute = prompt('Digite um número entre 1 e 100');

    console.log('tentativa :' + tentativas)

    if (numeroSecreto == numeroChute) {
        break;


    } else {
        if (numeroChute > numeroSecreto) {

            alert('O Número secreto é menor que ' + numeroChute + ' você já utilizou '+ tentativas +' tentativas');

        } else {
            alert('O Número secreto é maior que ' + numeroChute + ' você já utilizou '+ tentativas +' tentativas');

        } tentativas++
    }
}




 
// ABAIXO APLICANDO OPERADOR TERNÁRIO PARA ''RESUMIR O CÓDIGO''

let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa'

alert ('Você acertou o número secreto '+ numeroSecreto+' com'+' '+tentativas+' '+palavraTentativa);





if (tentativas > 1) {
    alert('você acertou o número secreto: ' + numeroSecreto + ' com ' + tentativas + ' tentativas');
} else {
    alert('você acertou o número secreto: ' + numeroSecreto + ' com ' + tentativas + ' tentativa')
};


alert ('boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert ('Erro! preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos.' 

alert (mensagemDeErro)

let nomeUsuario = prompt('Qual é o seu nome?')
let idadeUsuario = prompt('Qual é a sua idade')

if (idadeUsuario >= 18) {

    alert ('Pode tirar a habilitação')
}


let diaDaSemana = prompt('Qual dia da semana é hoje?')

if (diaDaSemana == 'sábado' ||diaDaSemana =='domingo') {

    alert ('bom fim de semana') 
} else 

alert ('Boa semana')


 let numeroDigitado = prompt('Digite um número')

 if (numeroDigitado %2 == 0 ) {

    alert('O número é par')
 } else alert('O número é ímpar')

 




 let contador = 1 

 while (contador <=10) {
    console.log('o contador está em ' + contador)
    contador++

 }



let contador = 10 

while (contador > 1 ) {

    console.log ('o contador está contando :' +contador)
    contador--
}



let numeroEscolhido = prompt ('digite um número') 
let contador = 1;

while (numeroEscolhido > contador) {


    console.log (" contando: " + numeroEscolhido)
    numeroEscolhido--
}


// DESAFIO 3 
//1.
console.log ('seja bem vindo')

//2.
let nome = prompt('qual o seu nome?');
console.log ('olá ' + nome)

//3.
let nome = prompt('qual é o seu nome ?')
alert ('olá ' + nome)

//4. 
let linguagem = prompt('qual é a linguagem que você mais gosta?')
console.log (linguagem)


//5 
let valor1 = 10
let valor2 = 30
let resultado = valor1 + valor2
console.log( 'a soma de '+ valor1 + ' + ' +valor2 +' é ' +resultado)

//6 
let valor1 = 10
let valor2 = 5
let resultado = valor1 - valor2
console.log( 'a subtração de '+ valor1 + ' - ' +valor2 +' é ' +resultado)

//7 
let idade = prompt('digite sua idade') 
    if (idade >= 18) {
    console.log('você é maior de idade')
} else {
    console.log('você é menor de idade')
}

//8 
let numeroDigitado = prompt('Digite um número')

 if (numeroDigitado %2 == 0 ) {

    alert('O número é par')
 } else alert('O número é ímpar')

 //9  
  let contador = 1

  while (contador <=10){

    console.log ('contando ' + contador)
    contador++
  }

  //10 
  let nota = 7

  if (nota >=7 ){
    console.log('aprovado')
  } else [
    console.log ('reprovado')
  ]

  //11 
  let numeroAleatorio = Math.random()
  console.log (numeroAleatorio)

  //12 
  let numeroInteiro = parseInt(Math.random()*10 +1)
console.log(numeroInteiro)*/

//13 
let numeroInteiroAte1000 = parseInt(Math.random()*1000 +1)

console.log(numeroInteiroAte1000)