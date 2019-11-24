import { Router } from "express";

import GeoController from "./app/controllers/GeoController";
import UserController from "./app/controllers/UserController";
import SchoolController from "./app/controllers/SchoolController";
import SchoolCategoryController from "./app/controllers/SchoolCategoryController";
import SchoolFoodTypeController from "./app/controllers/SchoolFoodTypeController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

/** Private routes (only with Auth) */
// routes.use(authMiddleware);

// Rotas de Categorias de escolas
routes.get("/school-categories", SchoolCategoryController.index);
routes.post("/school-categories", SchoolCategoryController.store);
routes.put("/school-categories/:id", SchoolCategoryController.update);
routes.delete("/school-categories/:id", SchoolCategoryController.delete);

// Rotas de Alimentação  de escolas
routes.get("/school-foods", SchoolFoodTypeController.index);
routes.post("/school-foods", SchoolFoodTypeController.store);

routes.post("/geo", GeoController.index);
routes.get("/users", UserController.index);
routes.get("/near-schools", GeoController.index);
routes.get("/schools", SchoolController.index);
routes.post("/schools", SchoolController.store);

export default routes;
