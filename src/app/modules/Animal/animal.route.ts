import { Router } from "express";
import { AnimalController } from "./animal.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AnimalValidationSchema } from "./animal.validation";

const router = Router();
// req,res flow: router -->> controller -->> services -->> model
//                router <<-- controller <<-- services <<-- model
router.get("/", AnimalController.getAnimals);
router.post(
  "/",
  validateRequest(AnimalValidationSchema.createAnimalValidation),
  AnimalController.createAnimal
);

export const AnimalRoutes = router