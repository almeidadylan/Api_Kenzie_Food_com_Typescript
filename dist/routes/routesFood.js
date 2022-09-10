"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createProduct_controller_1 = __importDefault(require("../controllers/createProduct.controller"));
const listProducts_controller_1 = __importDefault(require("../controllers/listProducts.controller"));
const routes = (0, express_1.Router)();
routes.get("/products", listProducts_controller_1.default);
routes.post("/products", createProduct_controller_1.default);
exports.default = routes;
