
import { Router } from "express";
import { CategoryController } from "./category.controller";
import validateRequest from "../../middlewares/validateRequest";
import { categoryValidationSchema } from "./category.validation";
const router = Router()
// req,res flow: router -->> controller -->> services -->> model
//                router <<-- controller <<-- services <<-- model
router.get("/", CategoryController.getCategories);
router.post("/",validateRequest(categoryValidationSchema.createCategoryValidation), CategoryController.createCategory);
export const CategoryRoutes= router