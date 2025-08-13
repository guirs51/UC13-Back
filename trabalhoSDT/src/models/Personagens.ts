export class Personagens {
     nome: string;
     tipo: string;
     raca: string; 
     arma: string;
     status: string;

	constructor(nome: string, tipo: string, raca: string, arma: string, status: string) {
		this.nome = nome;
		this.tipo = tipo;
		this.raca = raca;
		this.arma = arma;
		this.status = status;
	}
}