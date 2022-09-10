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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createProduct_service_1 = __importDefault(require("../services/createProduct.service"));
const CreateProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { imagem, nome, descricao, categoria, preco } = req.body;
        const product = yield (0, createProduct_service_1.default)({
            imagem, nome, descricao, categoria, preco
        });
        return res.status(200).json(product);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ error: err.message });
        }
    }
});
exports.default = CreateProductController;
