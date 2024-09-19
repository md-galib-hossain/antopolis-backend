import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AnimalService } from "./animal.service";

const getAnimals = catchAsync(async (req, res) => {
  const result = await AnimalService.getAnimals();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Animals retrieved",
    data: result,
  });
});
const createAnimal = catchAsync(async (req, res) => {
  const result = await AnimalService.createAnimal(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Animal created",
    data: result,
  });
});

export const AnimalController = {
  getAnimals,
  createAnimal,
};
