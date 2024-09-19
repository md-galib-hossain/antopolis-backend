import { z } from "zod";

const createAnimalValidation = z.object({
    body: z.object({
      name: z.string().min(1, "Animal name is required"),
      animalImg: z.string().optional(),
      category: z.string().min(1, "Category is required"),
    }),
  });
  export const AnimalValidationSchema = {
    createAnimalValidation,
  };