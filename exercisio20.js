// 19 - Mostre no console o nome de um amigo de cada lista.

var cadastro = [
    {
        nome: "João",
        idade: 30,
        telefone: "123456789",
        amigos: ["Maria", "Pedro", "Ana", "Carlos"]
    },
    {
        nome: "Ana",
        idade: 25,
        telefone: "987654321",
        amigos: ["Paulo", "Mariana", "Fernando", "Julia"]
    },
    {
        nome: "Pedro",
        idade: 28,
        telefone: "555555555",
        amigos: ["Lucas", "Camila", "Rafael", "Isabela"]
    },
    {
        nome: "Mariana",
        idade: 22,
        telefone: "777777777",
        amigos: ["Larissa", "Rodrigo", "Luiza", "Guilherme"]
    },
    {
        nome: "Carlos",
        idade: 29,
        telefone: "444444444",
        amigos: ["Joana", "Alexandre", "Renata", "Eduardo"]
    }
];

for (var i = 0; i < cadastro.length; i++) {
    var amigos = cadastro[i].amigos;
    var primeiroAmigo = amigos[0];
    console.log("Amigo de " + cadastro[i].nome + ": " + primeiroAmigo);
}
