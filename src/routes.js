import { Router } from "express";

import GeoController from "./app/controllers/GeoController";
import UserController from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

/** Private routes (only with Auth) */
// routes.use(authMiddleware);

routes.get("/usuarios", UserController.index);
routes.get("/escolas-proximas", GeoController.index);

export default routes;
