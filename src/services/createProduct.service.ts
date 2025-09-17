import { AppDataSource } from "../data-source";
import Product from "../models/Products";

interface ProductParams {
    image: string;
    name: string;
    description: string;
    category: string;
    price: number;
};

const CreateProductService = async (data: ProductParams) => {
    const productRepository = AppDataSource.getRepository(Product);

    const product = productRepository.create(data);

    await productRepository.save(product);

    return product;
};

export default CreateProductService;