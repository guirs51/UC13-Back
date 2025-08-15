import { Request, Response } from 'express';
import { connection } from '../config/database';


export class PersonagensController {
     async create(req: Request, res: Response): Promise<Response> {
        try {
        const {nome, tipo, raca, arma, status} = req.body;
        await connection.query('INSERT INTO personagens (nome, tipo, raca, arma, status) VALUES (? , ?, ?, ?, ?)', [nome, tipo, raca, arma, status]);
        return res.status(201).json({mensagem: "personagem criado com sucesso!"});
        }
        catch(erro) {
            console.log("erro ao criar personagem: "+ erro);
            return res.status(500).json({mensagem: "houve um erro interno"});
        }
     }

     async list(req: Request, res: Response): Promise<Response> {
        try{
            const [rows] = await connection.query("SELECT * FROM  personagens");
            return res.status(200).json({mensagem: "personagens listados com sucesso!", nome: [rows]});
        }
        catch(erro){
            console.log("erro ao listar personagens: "+ erro);
            console.log(req.body)
            return res.status(500).json({mensagem: "houve um erro interno"});
        }
     }

     async getbyId(req: Request, res:Response): Promise<Response> {
        try{
            const {id} = req.params
            const [rows]: any[] = await connection.query("SELECT * FROM  personagens WHERE id = ?", [id]);
            if (rows.length === 0) {
                  return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
                 }
            return res.status(200).json({mensagem: "personagem listado", rows})
        }
        catch(erro){
            console.log(erro)
            return res.status(500).json({mensagem: "Houve um erro interno"})
        }
     }

     async update(req: Request, res:Response): Promise<Response> {
        try{
            // const id:Number = Number(req.params.id);
            const {id ,nome, tipo, raca, arma, status} = req.body
            await connection.query("UPDATE personagens SET nome = ?, tipo = ?, raca = ?, arma = ?, status = ? WHERE id = ?", [nome, tipo, raca, arma, status, id]);
            return res.status(200).json({mensagem: "Personagem atualizado com sucesso!"})
        }
        catch(erro){
            console.log("Erro ao atualizar o personagem: "+ erro);
            return res.status(500).json({mensagem: "Houve um  erro interno"});
        }
     }

     async delete(req: Request, res: Response): Promise<Response> {
        try{
            const {id}= req.params;
            //const id: number = req.body
            await connection.query("DELETE FROM personagens WHERE id = ?", [id]);
         return res.status(201).json()
        }
        catch(erro) {
            console.log("Erro ao deletar personagem: "+ erro);
            return res.status(500).json({mensagem: "Houve um erro interno"});
        }
     }
}