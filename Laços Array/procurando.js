
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibe(aluno) {
    if (alunos.includes(aluno)) {
        
        // const alunos = listaDeAlunosEMedias[0];
        // const media = listaDeAlunosEMedias[1];

        const [alunos, media] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno); // primeiro tem que pegar o index do aluno para acessar a sua nota
        
        const mediaAluno = media[indice]; // como está sendo atribuido o indice através da posição do aluno, ao botar com a lista 2d de medias, ele vai manter o mesmo índice, localizando assim a sua nota

        console.log(`${aluno} está cadastrado, e tem a média de ${mediaAluno}`);

    } else {
        console.log("aluno não encontrado");
    }
}

exibe("Juliana");