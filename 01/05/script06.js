/*
** jogo da advinhação**

Apresente a mnesagem ao usuario:
"Adivinhe o numero que estou pensansdo? Entre 0 e 10"

Crie uma logica para gerar um numero aleatorio
e verificar se  o numero digitado é o mesmo que o aleatorio gerado
pelo sistema.

Enquanto o usuario não adivinhar o numero, mostrar a mensagem:
"Erro, tente novamente:"

caso o usuario acerte o numero, apresentar a mensagem:
"Parabens! voce adivinhou o numero em x tentativas"
 
Substitua o "X" da mensagem pelo numero de tentativas
*/

let result = prompt("Adivinhe o numero que estou pensando? Esta entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10) 
let xAttempts = 1;

while(Number(result) != randomNumber){
    result=prompt("erro tente novamente")
    xAttempts++
}
if(xAttempts > 1){
    alert(`parabens voce adivinhou o numero em ${xAttempts} tentativas`)
}else if(xAttempts = 1){
    alert(`parabens voce adivinhou o numero em ${xAttempts} tentativa`)
}