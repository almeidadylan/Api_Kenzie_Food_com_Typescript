import { Request, Response } from "express";
import UpdateProductService from "../services/updateProduct.service";


const UpdateProductController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { imagem, nome, descricao, categoria, preco } = req.body;

        const product = await UpdateProductService(id, imagem, nome, descricao, categoria, preco);

        return res.status(200).json(product)
    }
    catch (err) {
        if ( err instanceof Error ) {
            return res.status(400).json({ error: err.message})
        }
    }
};

export default UpdateProductController;
