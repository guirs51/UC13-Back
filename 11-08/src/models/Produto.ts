export class Produto {
    id: number;
    nomeProduto: string;
    preco: number;

	constructor(id: number, nomeProduto: string, preco: number) {
		this.id = id;
		this.nomeProduto = nomeProduto;
		this.preco = preco;
	}
}

export let produtos: Produto [] = []