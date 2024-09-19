import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import httpStatus from "http-status";

const getCategories = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.getCategories();
    res.json({
        statusCode: httpStatus.OK,
        success: true,
        message: "Categories retrieved",
        data: result
    })
  } catch (error) {
      console.log(error);
    throw new Error("Couldn't get categories");
  }
};
const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.createCategory(req.body);
    res.json({
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Category created",
        data: result
    })
  } catch (error) {
      console.log(error);
    throw new Error("Couldn't get categories");
  }
};

export const CategoryController = {
  getCategories,createCategory
};
