import { MigrationInterface, QueryRunner } from "typeorm";

export class tableProducts1662841932415 implements MigrationInterface {
    name = 'tableProducts1662841932415'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "imagem" character varying NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "categoria" character varying NOT NULL, "preco" double precision NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
