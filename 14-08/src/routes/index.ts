import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { PostController } from '../controllers/PostController';
import { ProductController } from '../controllers/ProductController';
import { CategoryController } from '../controllers/CategoryController';

const routes = Router();
const userController = new UserController();
const postController = new PostController();
const productController = new ProductController();
const categoryController = new CategoryController();

routes.get('/users',(req, res) => userController.list(req, res));
routes.get("/products",(req, res) => productController.list(req, res))
routes.post('/users',(req, res) =>  userController.create(req, res));
routes.post('/posts', (req, res) => postController.create(req, res));
routes.post("/categoria",(req, res) => categoryController.create(req, res))
routes.post("/products", (req, res) => productController.create(req, res))

export default routes;