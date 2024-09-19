import { Router } from "express";
import { CategoryRoutes } from "../modules/Category/category.route";
import { AnimalRoutes } from "../modules/Animal/animal.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/category',
        route : CategoryRoutes
    },
    {
        path: '/animal',
        route : AnimalRoutes
    },
   
]
moduleRoutes.forEach((route)=> router.use(route.path,route.route))
export default router