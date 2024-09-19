import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AnimalService } from "./animal.service";

const getAnimals = catchAsync(async (req, res) => {
  const result = await AnimalService.getAnimals(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Animals retrieved",
    meta: result.meta,
    data: result.result,
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
