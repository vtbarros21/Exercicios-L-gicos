// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
var hora = new Date().getHours();

if (hora >= 6 && hora <18) {
    console.log("Está de dia");
} else {
    console.log("Está de noite")
}