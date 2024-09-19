import { model, Schema } from "mongoose";
import { IAnimal } from "./animal.interface";
import { boolean } from "zod";

const animalSchema = new Schema<IAnimal>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    animalImg: {
      type: String,
      default: "",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);
export const Animal = model<IAnimal>("Animal", animalSchema);
