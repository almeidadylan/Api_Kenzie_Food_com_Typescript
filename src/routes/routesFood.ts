import { Router } from "express";
import CreateProductController from "../controllers/createProduct.controller";
import listProductsController from "../controllers/listProducts.controller";

const routes = Router();

routes.get("/products", listProductsController)
routes.post("/products", CreateProductController)

export default routes