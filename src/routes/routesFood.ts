import { Router } from "express";
import listProductsController from "../controllers/listProducts.controller";

const routes = Router();

routes.get("/products", listProductsController)
routes.post("/products", )

export default routes