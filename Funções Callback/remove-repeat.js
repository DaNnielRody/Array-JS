//Remova os nomes repetidos, deixando apenas um de cada.

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const removeDuplicadas = new Set(nomes);

const nomesAtualizados = [...removeDuplicadas];

console.log(nomesAtualizados);