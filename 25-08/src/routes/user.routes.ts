import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
const controller = new UserController();
//list: normalmente so admins podem listar todos os usuarios
router.get("/", controller.list.bind(controller));

//profile do usuario logado
//le as infos
router.get("/me", authMiddleware, controller.getById.bind(controller));

//create: permite cadastrar de novo usuario (não precisa estar logado)
// router.post("/me", controller.create.bind(controller));

//atualiza as infos
router.put("/me", authMiddleware, controller.update.bind(controller));

//remove
router.delete("/me", authMiddleware, controller.remove.bind(controller));

export default router;
