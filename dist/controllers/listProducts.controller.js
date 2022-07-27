"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listProducts_service_1 = __importDefault(require("../services/listProducts.service"));
const listProductsController = (req, res) => {
    const products = (0, listProducts_service_1.default)();
    return res.status(200).json(products);
};
exports.default = listProductsController;
