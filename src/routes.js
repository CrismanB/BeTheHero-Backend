const express = require("express");
const routes = express.Router();

const OngsController = require("./controllers/OngsController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.post("/sessions", SessionController.store);

routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.store);

routes.get("/profile", ProfileController.index);

routes.post("/incidents", IncidentsController.store);
routes.get("/incidents", IncidentsController.index);
routes.delete("/incidents/:id", IncidentsController.destroy);

module.exports = routes;
