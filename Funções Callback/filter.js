// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];


let reprovado = alunos.filter((_, i) => {
    return medias[i] <= 7;
})

console.log(reprovado);