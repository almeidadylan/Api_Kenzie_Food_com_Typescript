"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const listProductsService = () => {
    return database_1.products;
};
exports.default = listProductsService;
