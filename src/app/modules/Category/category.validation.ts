import { z } from "zod";

const createCategoryValidation = z.object({
    body: z.object({
      name: z.string().min(1, "Animal Category name is required"),
    }),
  });
  export const categoryValidationSchema = {
    createCategoryValidation,
  };