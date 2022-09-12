import { Router } from "express";
import CreateProductController from "../controllers/createProduct.controller";
import listProductsController from "../controllers/listProducts.controller";
import UpdateProductController from "../controllers/updateProduct.controller";

const routes = Router();

routes.get("/products", listProductsController)
routes.post("/products", CreateProductController)
routes.patch("/products/:id", UpdateProductController)

export default routes