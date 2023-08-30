// 08 - crie uma função que  verifique se uma  variável é true ou false

function verificarBooleano(valor) {
    if (typeof valor === 'boolean') {
        if (valor === true) {
            return "A variável é true.";
        } else {
            return "A variável é false.";
        }
    } else {
        return "A variável não é um booleano.";
    }
}

var variavel1 = true;
var variavel2 = false;
var variavel3 = 10;

console.log(verificarBooleano(variavel1));
console.log(verificarBooleano(variavel2));
console.log(verificarBooleano(variavel3));


