import { Request, Response } from "express";
import { AppDataSource } from '../config/data-source';
import { Product } from "../models/Product";


export class ProductController {

    private ProductRepostirio = AppDataSource.getRepository(Product);

    async list(req: Request, res: Response){
         const product = await this.ProductRepostirio.find({relations: ['categorys']})
         return res.status(200).json(product);
    }

    async create(req: Request, res: Response){
        const {name, price} = req.body

        const product = this.ProductRepostirio.create({name, price});
        await this.ProductRepostirio.save(product)

        return res.status(201).json(product);
    }
}