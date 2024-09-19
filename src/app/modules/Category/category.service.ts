import httpStatus from "http-status";
import AppError from "../../errors/App.Error";
import { AnimalCategory } from "./category.interface";
import { Category } from "./category.model";

const getCategories = async (): Promise<AnimalCategory[]> => {
  const result = await Category.find();
  return result;
};
const createCategory = async (
  payload: Partial<AnimalCategory>
): Promise<AnimalCategory> => {
  const existsName = await Category.findOne({ name: payload.name });
  if (existsName) throw new AppError(httpStatus.BAD_REQUEST,"Category name already exists");
  const result = await Category.create(payload);
  return result;
};

export const CategoryService = {
  getCategories,
  createCategory,
};
