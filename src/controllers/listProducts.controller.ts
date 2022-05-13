import listProductsService from "../services/listProducts.service";
import { Request, Response } from "express";

const listProductsController = (req: Request, res: Response) => {
    const products = listProductsService();

    return res.status(200).json(products);
};

export default listProductsController;