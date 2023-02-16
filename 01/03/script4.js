/*
Solicitar o nome do aluno e as 3 notas
do bimestre calcula as medias daquele aluno

se o  aluno passou no bimestre dar os parabens

Se o aluno não  passou no bimestre, motivar o aluno a dar o seu melhor na prova de recuperação

Em ambos os casos mostre a mensagem com o nome do aluno e a nota
*/

lert('calculadora de media!')
let nome = prompt('qual o seu nome?')

let noteOne = Number(prompt("digite sua primeira nota"))
let noteTwo = Number(prompt("digite sua segunda nota"))
let noteTree= Number(prompt("digite sua terceira nota"))

const average = ((noteOne + noteTwo + noteTree) /3).toFixed(2)

alert(nome +  " sua nota é: "  + average)
 if (average >= 15 && average <= 25){
    alert(" parabens " + nome + " voce está aprovado ")
 } else if (average < 15 && average >0){
    alert(" sinto muito "  +  nome  +  " sua nota foi "  +  average  +  " é não e o suficiente , estude mais para a proxima ")
 }if(average > 25){
    alert(' voce digitou valores muito altos , por favor digite novamente ')
 };