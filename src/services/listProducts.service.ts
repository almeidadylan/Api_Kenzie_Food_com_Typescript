import { AppDataSource } from "../data-source";
import Product from "../models/Products";

const listProductsService = async () => {
    const productRepository = AppDataSource.getRepository(Product)

    const products = await productRepository.find() 

    return products
};

export default listProductsService;