import { Request, Response, NextFunction } from "express";
import { connection } from "../config/database";

export const chamadoDoAnel = async(req: Request, res: Response, next: NextFunction) => {
    const tipo = req.body.tipo
     if(tipo === "Nazgûl"){
        console.log("Frodo sente o Um Aneul querendo retornar ao seu Mestre")
     }
    next();
}