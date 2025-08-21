import { Request, Response } from "express";
import { AppDataSource } from '../config/data-source';
import { Category } from "../models/Category";
import { Product } from "../models/Product";

export class CategoryController {

    private categoryRepostori = AppDataSource.getRepository(Category);
    private productRepostori = AppDataSource.getRepository(Product);

    async create(req: Request, res: Response){
        const {name, } = req.body
        // const product = await this.productRepostori.findOneBy({id: productId});
        // if(!product) return res.status(404).json({mensage: "Product Not Found"});

        // const category = this.categoryRepostori.create({name, productId});
        const category = this.categoryRepostori.create({name})
        await this.categoryRepostori.save(category);
        return res.status(201).json(category)
    }
}