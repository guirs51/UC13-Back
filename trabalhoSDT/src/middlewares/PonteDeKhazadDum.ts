import { Request, Response, NextFunction } from "express";
import { connection } from "../config/database";

export const ponteDeKhazaDum = async (req: Request , res: Response, next: NextFunction) => {
   if (req.method === "GET") {
        
        const [rows]:any[] = await connection.query(
            "SELECT tipo FROM personagens WHERE id = ?", [req.params.id]
        ) 

        if(rows.length > 0){
            const tipo = rows[0].tipo;
        switch (tipo) {
            case "Sociedade":
                console.log("Corram seus tolos!");
                break;

            case "Nazgûl":
                console.log("Os Nazgûl não estão em Moria.");
                break;

            case "Balrog":
                console.log("Você não vai passar!");
                break;

            default:
                break;
            }
        }
    }

    next();
}