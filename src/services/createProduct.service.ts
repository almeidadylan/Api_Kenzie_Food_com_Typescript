import { AppDataSource } from "../data-source";
import Product from "../models/Product";

interface ProductParams {
    imagem: string;
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
};

const CreateProductService = async (data: ProductParams) => {
    const productRepository = AppDataSource.getRepository(Product);

    const product = productRepository.create(data);

    await productRepository.save(product);

    return product;
};

export default CreateProductService;