import express , {Application}from "express";
import route from "./routes/PersonagensRouters";
import { ponteDeKhazaDum } from "./middlewares/PonteDeKhazadDum";
import { chamadoDoAnel } from "./middlewares/ChamadoAnel";
import { RotaPerdida } from "./middlewares/ARotaPerdida";

const app: Application = express();
const PORT = 3000

app.use(express.json());

app.use(route);
app.use(RotaPerdida);


app.listen(PORT, () => {
    console.log("servidor rodando em: http://localhost:3000");
});