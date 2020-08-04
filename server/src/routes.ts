import express from "express";

import ClassesController from "./controllers/ClassesControler";

import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const classesControlers = new ClassesController();

const connectionsController = new ConnectionsController();

routes.get("/classes", classesControlers.index);

routes.post("/classes", classesControlers.create);

routes.post("/connections", connectionsController.create);

routes.get("/connections", connectionsController.index);

export default routes;
