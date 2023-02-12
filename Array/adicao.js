const notasErro = [10, 6, 8];
let quantidadeDeNotasErro = notasErro.length;

let mediaNotas = (notasErro[0] + notasErro[1] + notasErro[2]) / quantidadeDeNotasErro;
console.log(mediaNotas);

notasErro.push(7);
let quantidadeDeNotasCerto = notasErro.length;
mediaNotas = (notasErro[0] + notasErro[1] + notasErro[2] + notasErro[3]) / quantidadeDeNotasCerto;
console.log(mediaNotas.toFixed(1));