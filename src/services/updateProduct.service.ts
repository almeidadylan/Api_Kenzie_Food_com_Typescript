import { AppDataSource } from "../data-source";
import Product from "../models/Products";


const UpdateProductService = async (id: string, image: string, name: string, description: string, category: string, price: number) => {
    const productRepository = AppDataSource.getRepository(Product);
    const identificator: number = parseInt(id)

    const product = await productRepository.findOneBy({ id: identificator });

    if ( product === null) {
        throw new Error
    }

    product?.image ? (product.image = image) : (product?.image);
    product?.name ? (product.name = name) : (product?.name);
    product?.description ? (product.description = description) : (product?.description);
    product?.category ? (product.category = category) : (product?.category);
    product?.price ? (product.price = price) : (product?.price);    

    return productRepository.save(product);
};

export default UpdateProductService;