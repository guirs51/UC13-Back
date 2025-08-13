import { Pessoa } from "./Pessoa"

let nome: string = "gui"
let idade: number = 30
let estudante: boolean = true

//arrays
let listaDeCompras: string[] = ["asmda", "fada"]
let notas: Array<number> = [10, 8, 9]

let professor: {nome: string, idade: number, disciplinas: string[]} = {
    nome: "LEO",
    idade: 30,
    disciplinas: ["uc1", "uc2", "uc3"]
}


function mensagem(): void {
    console.log("Ola pessoal");
}

function frase(nome: string): string{
    return `ola ${nome}, como vai voce?`;
}

function fraseOpcional(nome?: string): void {
    console.log("Ola " + (nome || "Mundo"));
}

fraseOpcional()
fraseOpcional("gui")

function desconto(valor:number, desconto:number  = 5): void{
    console.log(valor - desconto);
}

desconto(100)
desconto(100, 10)

const fulano:Pessoa = new Pessoa("Leo senac de souza", 30);
console.log(fulano.getage())
