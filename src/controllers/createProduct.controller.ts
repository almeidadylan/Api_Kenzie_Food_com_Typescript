import CreateProductService from "../services/createProduct.service";
import { Request, Response } from "express";

const CreateProductController = async (req: Request, res: Response) => {
    try {
        const { image, name, description, category, price } = req.body;

        const product = await CreateProductService({
            image, name, description, category, price
        });

        return res.status(200).json(product)
    }
    catch (err) {
        if ( err instanceof Error ) {
            return res.status(400).json({ error: err.message })
        }
    }


};

export default CreateProductController;