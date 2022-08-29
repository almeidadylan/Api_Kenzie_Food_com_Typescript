import CreateProductService from "../services/createProduct.service";
import { Request, Response } from "express";

const CreateProductController = async (req: Request, res: Response) => {
    try {
        const { imagem, nome, descricao, categoria, preco } = req.body;

        const product = await CreateProductService({
                imagem, nome, descricao, categoria, preco
        });

        return res.status(200).json(product)
    }
    catch (err) {
        if ( err instanceof Error ) {
            
        }
    }


};

export default CreateProductController;