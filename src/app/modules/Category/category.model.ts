import { model, Schema } from "mongoose";
import { AnimalCategory } from "./category.interface";

const categorySchema = new Schema<AnimalCategory>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  categoryImg: {
    type: String,
    default: "",
  },
},
{
    timestamps: true
});

export const Category = model<AnimalCategory>("Category", categorySchema)