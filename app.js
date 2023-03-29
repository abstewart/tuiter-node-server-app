import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
const app = express()
app.use(express.json());

HelloController(app);
UsersController(app);
TuitsController(app);

app.listen(4000)