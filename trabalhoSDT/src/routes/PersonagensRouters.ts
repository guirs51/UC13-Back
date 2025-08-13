import { PersonagensController } from "../controllers/PersonagensController";
import { Router } from "express";

const route = Router();
const controllers = new PersonagensController();

route.get("/personagem", controllers.list);
route.post("/personagem", controllers.create);
route.delete("/personagem", controllers.delete);
route.put("/personagem", controllers.update);

export default route