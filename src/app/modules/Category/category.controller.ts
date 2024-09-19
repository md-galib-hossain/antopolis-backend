import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const getCategories = catchAsync(async (req, res) => {
  const result = await CategoryService.getCategories();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Categories retrieved",
    data: result,
  });
});
const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.createCategory(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Category created",
    data: result,
  });
});

export const CategoryController = {
  getCategories,
  createCategory,
};
