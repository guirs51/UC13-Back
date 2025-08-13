import express, {Application } from "express";
import router from "./routes/UserRoutes";
import routers from "./routes/ProdutoRouter";

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

app.use(router)
app.use(routers);

app.listen(PORT,  () => {
    console.log("servidor rodando em http://localhost:"+ PORT)
})