// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.

var meuObjeto = {
    nome: "Victor",
    idade: 21,
    profissao: "Desenvolvedor"
};

var novoObjeto = Object.assign({}, meuObjeto, {Relacionamento: "Casado"});

console.log(novoObjeto);

console.log(meuObjeto);