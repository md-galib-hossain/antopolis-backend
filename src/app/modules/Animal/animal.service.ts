import httpStatus from "http-status";
import AppError from "../../errors/App.Error";
import { IAnimal } from "./animal.interface";
import { Animal } from "./animal.model";
import { Category } from "../Category/category.model";

const getAnimals = async (): Promise<IAnimal[]> => {
  const result = await Animal.find();
  return result;
};
const createAnimal = async (payload: Partial<IAnimal>): Promise<IAnimal> => {
  const existsName = await Animal.findOne({ name: payload.name });
  if (existsName)
    throw new AppError(httpStatus.BAD_REQUEST, "Animal name already exists");

  const existsCategory = await Category.findById(payload.category);
  if (!existsCategory)
    throw new AppError(httpStatus.NOT_FOUND, "Animal category not found");
  const createdAnimal = await Animal.create(payload);
  const result = await Animal.findById(createdAnimal?._id).populate("category");
  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Animal not found");
  return result;
};

export const AnimalService = {
  getAnimals,
  createAnimal,
};
