import { Request, Response } from "express";
import UpdateProductService from "../services/updateProduct.service";


const UpdateProductController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { image, name, description, category, price } = req.body;

        const product = await UpdateProductService(id, image, name, description, category, price);

        return res.status(200).json(product)
    }
    catch (err) {
        if ( err instanceof Error ) {
            return res.status(400).json({ error: err.message})
        }
    }
};

export default UpdateProductController;
