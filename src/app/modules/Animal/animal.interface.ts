import { Types } from "mongoose";

export interface IAnimal{
    _id?:Types.ObjectId;
    name: string;
    animalImg: string;
    isDeleted: boolean;
    category: Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}