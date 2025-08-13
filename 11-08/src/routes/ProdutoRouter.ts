import { ProdutoController } from "../controllers/ProdutoController";
import { Router } from "express";

const router = Router();
const controller = new ProdutoController();

router.get('/protudos', controller.listarProdutos);
router.post('/protudos', controller.createProduto);
router.put('/protudos/:id', controller.updateProdutos);
router.delete('/protudos/:id', controller.deleteProduto);

export default router;