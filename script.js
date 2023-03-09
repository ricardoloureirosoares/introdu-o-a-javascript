console.log("Iniciando no JavaScript")
  
  //string
console.log("Ricardo")
console.log ("Ricardo " + (9+1)) //Concatenar
console.log('Loureiro')
//Nesse caso a crase é uma templete string
//Template Strings são _string_s que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas. Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível
//Com o templete string pode-se colocar o código em linhas separadas
console.log(`
Soares
`) 
//Também é possivel colocar variáveis, operações expressões dentro do template string
console.log(`Ricardo ${5+5}`)

//e quando utilizar as aspas duplas e simples?
//para coisas mais simples, quando não  houver quebra de linha, expressões, etc.
//------------------------------
//É possivel tilizar as aspas duplas e simples ao mesmo tempo
console.log("Ricardo 'Loureiro' Soares")
console.log('Ricardo "Loureiro" Soares')
//-------------------------------------------------


//  TIPOS DE VARIÁVEIS

//NUMBER - NÚMEROS

22 // inteiros - integers - int
//exemplos
console.log(10+5)
console.log(-10+5)
console.log(10+5)

11.5 // reais - float
//exemplos
console.log(10.5 + 5.5)
console.log(-8.5 + 5.5)
// Os números interios ou reais/float podem ser positivos ou negativos

NaN // Not a Number - Não é um número - Retorno de uma operação que deu errado.
//exemplos
console.log(10 /"a")

Infinity /* infinito - Variável global, serve por exemplo para buscar números
          dentro de uma cadeia de números pois não há nenum número maior que                  ... o infinito */
//exemplo
console.log(Infinity)

/* BOOLEAN

//--True -- verdadeiro
//--False -- falso
// Assume somente dois valores (verdadeiro ou falso)
//Exemplos*/
console.log("a" === "a")
console.log("a" === "b")

/* UNDERFINED vs NULL
  undefinid - indefinido - um dado que não existe, ainda não foi definido.
  null - nulo - o dado foi definido, mas anida está fazio.
  exemplos
  */
console.log(null)
console.log(undefined)
console.log(null === undefined)
console.log(undefined)

//OBJECT
/*
  Objeto
    * Propriedade / Atributos
    * Funcionalidades / Métodos
    
    {propriedade: "valor"}
  */
console.log ({
  name: "Ricardo",
  surname: "Soares",
  email: "ricardo.soares@ifto.edu.br",
  getFullname: function () {
    return name + " " + surname;
  }
})

/* Array
* É uma lista de dados
* É um argumento
["café", "Açucar", 2, 5, 8, true, false]
*/
console.log(["café", "Açucar", 2, 5, 8, true, false])
