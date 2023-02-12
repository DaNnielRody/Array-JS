// Crie um novo array com a nota 10 a mais, sem alterar o array original.

// const notas = [7, 7, 8, 9];

// const novasNotas = notas;

// novasNotas.push(10);

// console.log(`As novas notas são ${novasNotas}`);
// console.log(`As notas originais são ${notas}`);

const notas = [7, 7, 8, 9];

const novasNotas = [...notas]; // o spread (...) é como se pegasse um ctrl c e ctrl v, sem alterar o array original, é como se o novasNotas recebesse apenas os valores, e não o array em si (como no caso anterior).

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);
