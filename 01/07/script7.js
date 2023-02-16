/*
faça um programa que tenha a seguinte mensagem:

ola usuario digite o numero da opção desejada

1. cadastrar um item na lista
2. Mostrar itens cadastrados
3. sair do programa.

o progarama devera capturar o numero digitado pelo usuario é mostrar os seguintes  cenarios:

Caso o usuario digite 1, ele podera cadastrar um item em uma lista
caso o usuario digite 2, ele podera ver os itens cadastrados
  Se não houver nehum item cadastrado, mostrar a mensagem:
   "Não existe itens cadastrados"
 Caso o usuario digite 3, a aplicação devera ser encerrada.  
*/

alert("MENU")
let list = []
while(options!= 3) {
       options = Number(prompt(`ola usuario digite o numero da opção desejada
       1. Cadastrar um item na lista 
       2. Mostrar itens cadastrados
       3. Sair do programa`))
 switch(options){
       case 1:
         let item = prompt("Digite algum item")
         list.push(item)
         break
       case 2:
         if(list.length ==0){
          alert("Não existem itens cadastrados")
           }else{
              alert(list)
              }
         break 
       case 3:
          alert("tchau")
         break
       default:
          alert("Opção invalida. Tente novamente")              
  }
}
