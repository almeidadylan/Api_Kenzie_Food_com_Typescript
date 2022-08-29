"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductsTable1661557742505 = void 0;
class createProductsTable1661557742505 {
    constructor() {
        this.name = 'createProductsTable1661557742505';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "product_id_seq" OWNED BY "product"."id"`);
            yield queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "id" SET DEFAULT nextval('"product_id_seq"')`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "id" DROP DEFAULT`);
            yield queryRunner.query(`DROP SEQUENCE "product_id_seq"`);
        });
    }
}
exports.createProductsTable1661557742505 = createProductsTable1661557742505;
