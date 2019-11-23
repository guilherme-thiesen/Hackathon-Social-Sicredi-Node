import { Router } from "express";

import GeoController from "./app/controllers/GeoController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

/** Private routes (only with Auth) */
routes.use(authMiddleware);

routes.get("/escolas-proximas", GeoController.index);

export default routes;
