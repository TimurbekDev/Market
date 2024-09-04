import { Router } from "express";
import { categoryRoutes } from "../modules/category/category.routes.js";
import { productRoutes } from "../modules/product/product.routes.js";

export const router = Router()

router
    .use('/categories',categoryRoutes)
    .use('/products',productRoutes)