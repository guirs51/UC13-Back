import { Request, Response } from "express";
import { Produto, produtos } from "../models/Produto";

export class ProdutoController {

    createProduto(req: Request , res: Response): Response {
        const {id, nome , preco} = req.body

        if(!id || !nome || !preco) return res.status(400).json({messagem: "Id, nome, e preço precisam ser informados!"})

        const produto: Produto = new Produto(id, nome, preco);
        produtos.push(produto)
        return res.status(201).json({messagem: "produto adicionado com succeso", produto: produto});
    }

    listarProdutos(req: Request, res: Response): Response{
        return res.status(200).json(produtos)
    }

    updateProdutos(req: Request, res: Response): Response {
        const id: Number = Number(req.params.id);
        const {nome , preco} =  req.body

        if(!nome || !preco) {
            return res.status(400).json({menssagem: "Nome e e-mail são obrigatórios!"});
        }

       let produto = produtos.find((prod) => prod.id === id)

       if(!produto) return res.status(404).json({menssagem: "Produto nao encontrado"})

       produto.nomeProduto = nome;
       produto.preco = preco;

        return res.status(200).json({messagem: "produto atualizado com sucesso", produto_atualizado: produto});
    }

    deleteProduto(req: Request, res: Response): Response {
        const id: number = Number(req.params.id);

        let index = produtos.findIndex(prod => prod.id === id);

        if (index === -1) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" })
        }

        produtos.splice(index, 1);
        return res.status(204).send();
    }
}