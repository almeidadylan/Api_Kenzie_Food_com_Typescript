import listProductsService from "../services/listProducts.service";
import { Request, Response } from "express";

const listProductsController = async (req: Request, res: Response) => {
    const products = await listProductsService();

    return res.status(200).json(products);
};

export default listProductsController;