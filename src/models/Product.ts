import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imagem: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    categoria: string

    @Column({ type: "float"})
    preco: number;
};

export default Product;