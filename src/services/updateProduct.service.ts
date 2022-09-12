import { AppDataSource } from "../data-source";
import Product from "../models/Product";


const UpdateProductService = async (id: string, imagem: string, nome: string, descricao: string, categoria: string, preco: number) => {
    const productRepository = AppDataSource.getRepository(Product);
    const identificator: number = parseInt(id)

    const product = await productRepository.findOneBy({ id: identificator });

    if ( product === null) {
        throw new Error
    }

    product?.imagem ? (product.imagem = imagem) : (product?.imagem);
    product?.nome ? (product.nome = nome) : (product?.nome);
    product?.descricao ? (product.descricao = descricao) : (product?.descricao);
    product?.categoria ? (product.categoria = categoria) : (product?.categoria);
    product?.preco ? (product.preco = preco) : (product?.preco);    

    return productRepository.save(product);
};

export default UpdateProductService;