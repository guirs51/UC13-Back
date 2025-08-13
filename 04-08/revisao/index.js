"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var nome = "gui";
var idade = 30;
var estudante = true;
//arrays
var listaDeCompras = ["asmda", "fada"];
var notas = [10, 8, 9];
var professor = {
    nome: "LEO",
    idade: 30,
    disciplinas: ["uc1", "uc2", "uc3"]
};
function mensagem() {
    console.log("Ola pessoal");
}
function frase(nome) {
    return "ola ".concat(nome, ", como vai voce?");
}
function fraseOpcional(nome) {
    console.log("Ola " + (nome || "Mundo"));
}
fraseOpcional();
fraseOpcional("gui");
function desconto(valor, desconto) {
    if (desconto === void 0) { desconto = 5; }
    console.log(valor - desconto);
}
desconto(100);
desconto(100, 10);
var fulano = new Pessoa_1.Pessoa("Leo senac de souza", 30);
console.log(fulano.getage());
