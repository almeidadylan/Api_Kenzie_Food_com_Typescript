import express from "express";
import routesProducts from "./routes/routesFood"
import cors from "cors";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors())

app.use(express.json());

app.use("", routesProducts);

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
});