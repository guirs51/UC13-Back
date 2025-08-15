import { PersonagensController } from "../controllers/PersonagensController";
import { Router } from "express";
import { ponteDeKhazaDum } from "../middlewares/PonteDeKhazadDum";
import { chamadoDoAnel } from "../middlewares/ChamadoAnel";
import { RotaPerdida } from "../middlewares/ARotaPerdida";


const route = Router();
const controllers = new PersonagensController();

route.get("/personagem",controllers.list);
route.get("/personagem/:id",ponteDeKhazaDum,controllers.getbyId)
route.post("/personagem", chamadoDoAnel,controllers.create);
route.delete("/personagem/:id",chamadoDoAnel, controllers.delete);
route.put("/personagem",controllers.update);

export default route