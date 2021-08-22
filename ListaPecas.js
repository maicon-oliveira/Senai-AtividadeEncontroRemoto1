var listaPecas = ["Filtro de Ar", "Amortecedor", "Radiador", "Correia Dentada", "Alternador"];

if (listaPecas.length < 10) {
    console.log("É possível cadastrar mais peças");
} else {
    console.log("Não há mais espaço nesta lista! Impossível cadastrar.");
}

let peso = 200;

if(peso < 100) {
    console.log("A peça não possui o peso adequado.");
} else {
    console.log("A peça possui o peso adequado");
}

// = Atribuição de valor
// == Verificação se os valores são iguais
// === Verificação se o valor é igual e se o tipo também é igual

let nomePeca = "Pastilha de Freio"
//Usando if, else if e else.
/*

if(nomePeca.length > 3) {
    console.log ("Nome da peça esta adequado para o cadastro.");
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio");
} else {
    console.log("O nome da peça deve ter mais de três caracteres");
}

*/

//Usando Switch para resolução do problema
switch(nomePeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio.");
        break;
    case 1:
    case 2:
    case 3:
        console.log("O nome da peça deve ter mais de três caracteres");
        break;
    default:
        console.log("O nome da peça esta adequado para o cadastro.");
        break;
}