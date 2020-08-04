import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

// Métodos HTTP

// GET: Buscar e listar uma informação
// POST: Criar uma nova informação
// PUT: Atualizar uma informação exsitente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para a criação ou atualização de um registro
// Route Params: Identificar qual recuros eu quero atualizar ou deletar
// Query Params: PAginação, filtros, ordenação

app.use(cors());

app.use(express.json())

app.use(routes);

app.listen(3333)