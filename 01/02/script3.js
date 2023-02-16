/*
capturar 2 numeros
e fazer as  operações matematicas
de soma, subtração, multiplicação,
divisão e resto da divisão

e para cada opração, mostrar um alerta com o resultado

*/


alert('iremos fazer algumas operações')
let numberOne = prompt('digite um numero')
let numberTwo = prompt('digite um segundo numero') // se usa let se for precisar reatribuir o valor a variavel

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = Number(numberOne) + Number(numberTwo)
const subtracttion = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`o resultado da soma dos numeros digitados é ${sum}`)
alert(`o resultado da subtração dos numeros digitados é ${subtracttion}`)
alert(`o resultado da multiplicação dos numeros digitados é ${multiplication}`)
alert(`o resultado da divisão dos numeros digitados é ${division}`)
alert(`o resultado do resto da divisão dos numeros digitados é ${restDiv}`)
