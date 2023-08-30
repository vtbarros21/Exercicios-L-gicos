// 18 - Mostre no console todas as propriedades desse objeto.

var meuObjeto = {
    nome: "Victor",
    idade: 21,
    profissao: "Desenvolvedor"
};

for (var propriedade in meuObjeto) {
    console.log(propriedade + ": " + meuObjeto[propriedade]);
}
