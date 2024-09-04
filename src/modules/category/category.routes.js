import { Router } from "express";
import { addCategory, deleteCategory, getAllCategories, updateCategoryById } from "./category.controller.js";


export const categoryRoutes = Router()

categoryRoutes
    .post('/',addCategory)
    .get('/',getAllCategories)
    .put('/:categoryId',updateCategoryById)
    .delete('/:categoryId',deleteCategory)