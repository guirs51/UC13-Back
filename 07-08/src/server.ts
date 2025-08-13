import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
const PORT = 3000
const time = new Date()


app.use((req: Request , res: Response, next: NextFunction) => {
    const data = time.toISOString();
    console.log("Requisição feita em: " + `${data}`)
    next();
})



app.use(express.json());

app.get('/sobre', (req: Request, res: Response): Response => {
    return res.status(200).json({nome: "gui" , idade: '18', descricao: "cabelo preto, 1,80 e joga baska"});
})

app.post('/comentarios' , (req: Request, res: Response): Response => {
    const comentario: string =  (req.body)
    if(!comentario){
        return res.status(400).json({ mesange: "corpo da requisiçao esta vazio"})
    } else {
        return res.status(201).json(comentario)
    }
})

app.delete("/comentarios/:id" , (req: Request, res: Response): Response => {
    const index: Number = (req.body)
    if(!index){
        console.log(index)
        return res.status(204).json({mensagen: "oi"})
    }else {

       return res.status(400).json({mensagem: "ID não enviado"});
    }
})


app.listen(PORT, () => {
    console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
  });