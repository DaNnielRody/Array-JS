const notasAluno = [10, 6, 8, 5.5, 10];

let quantidadeNotasAluno = notasAluno.length;

let mediaNotas = (notasAluno[0] + notasAluno[1] + notasAluno[2] + notasAluno[3] + notasAluno[4]) / quantidadeNotasAluno;

console.log(`A média das notas era de ${mediaNotas.toFixed(1)}`);

notasAluno.pop();

quantidadeNotasAluno = notasAluno.length;

mediaNotas = (notasAluno[0] + notasAluno[1] + notasAluno[2] + notasAluno[3]) / quantidadeNotasAluno;

console.log(`A média das notas é de ${mediaNotas.toFixed(1)}`);