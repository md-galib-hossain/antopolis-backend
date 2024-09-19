import httpStatus from "http-status";
import AppError from "../../errors/App.Error";
import { IAnimal } from "./animal.interface";
import { Animal } from "./animal.model";
import { Category } from "../Category/category.model";
import { TMeta } from "../../utils/sendResponse";
import QueryBuilder from "../../builder/QueryBuilder";

const getAnimals = async (query: Record<string,unknown>): Promise<{meta: TMeta,result: IAnimal[]}> => {
  
  const animalQuery = new QueryBuilder(Animal.find(),query).search(["name"]).filter().sort().paginate().fields()
    const result = await animalQuery.modelQuery;
    const meta = await animalQuery.countTotal();
  return {
    meta,
    result,
  };
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
