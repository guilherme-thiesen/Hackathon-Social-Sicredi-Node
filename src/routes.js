import { Router } from "express";

import GeoController from "./app/controllers/GeoController";
import UserController from "./app/controllers/UserController";
import SchoolController from "./app/controllers/SchoolController";
import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

/** Private routes (only with Auth) */
// routes.use(authMiddleware);
routes.post("/geo", GeoController.index);
routes.get("/users", UserController.index);
routes.get("/near-schools", GeoController.index);
routes.get("/schools", SchoolController.index);
routes.post("/schools", SchoolController.store);

export default routes;
