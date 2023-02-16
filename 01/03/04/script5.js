/*
Capture 10 items para compor a lista de um  supermercado.

Após capturar os 10 itens, imprima-os, separando por virgula.
*/

alert("lista de compras")

const compras = [];

for(let item = 1; item <=10; item++){
    compras.push(prompt(`${item} item da sua lista`))
};
alert(`sua lista de compras é: ${compras}`)