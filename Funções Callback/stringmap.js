// Temos uma lista de strings em que os nomes não estão padronizados, alguns nomes estão com maiúsculas e outros estão com minúsculas. Vamos padronizar para ter maior consistência nos nossos dados.

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesMaiusculos = nomes.map(nome => {
    return nome.toUpperCase();
})

console.log(nomesMaiusculos);