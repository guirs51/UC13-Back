import { Request, Response } from "express";

export const RotaPerdida = async (req: Request, res: Response) => {
    return res.status(404).json({error: "A passagem de Caradhras está fechada por Saruman. Esta rota não existe para nós. Só nos sobrou...Moria."});
}