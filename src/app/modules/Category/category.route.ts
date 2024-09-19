
import { Router } from "express";
import { CategoryController } from "./category.controller";
const router = Router()
// req,res flow: router -->> controller -->> services -->> model
//                router <<-- controller <<-- services <<-- model
router.get("/", CategoryController.getCategories);
router.post("/", CategoryController.createCategory);
export const CategoryRoutes= router