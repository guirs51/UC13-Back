import express , {Application, application }from "express";
import route from "./routes/PersonagensRouters";

const app: Application = express();
const PORT = 3000

app.use(express.json());

app.use(route);

//Chamado do Anel 
const anel = (res: Response, req: Request):void => {
    if(req.method != "GET"){
        console.log("passem")
    }
}

//A Ponte de Khazad-dûm
const Ponte = (res: Response, req: Request):void => {
    if(req.method === "GET"){
        
    }
}

app.listen(PORT, () => {
    console.log("servidor rodando em: http://localhost:3000");
});