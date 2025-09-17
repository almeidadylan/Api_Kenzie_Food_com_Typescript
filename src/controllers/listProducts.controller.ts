import listProductsService from "../services/listProducts.service";
import { Request, Response } from "express";

const listProductsController = async (req: Request, res: Response) => {
    try {
        const products = await listProductsService();
    
        return res.status(200).json(products);
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).send({ error: err.name, message: err.message });
        }
    }
};

export default listProductsController;