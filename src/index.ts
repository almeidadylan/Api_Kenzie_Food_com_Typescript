import express from "express";
import routesProducts from "./routes/routesFood"

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", routesProducts);

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
});