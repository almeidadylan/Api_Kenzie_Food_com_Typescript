import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Products {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    category: string

    @Column({ type: "float"})
    price: number;
};

export default Products;