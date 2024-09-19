import { AnimalCategory } from "./category.interface";
import { Category } from "./category.model";

const getCategories = async (): Promise<AnimalCategory[]> => {
  try {
    const result = await Category.find();
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't get categories");
  }
};
const createCategory = async (
  payload: Partial<AnimalCategory>
): Promise<AnimalCategory> => {
  try {
    const existsName = await Category.findOne({ name: payload.name });
    if (existsName) throw new Error("Category name already exists");
    const result = await Category.create(payload);
    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't created category");
  }
};

export const CategoryService = {
  getCategories,createCategory
};
