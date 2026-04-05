// Importa as funções do controller (onde está a lógica de cada rota)
import { getDoacoes, addDonation, updateDonation, deleteDonation } from "../controller/controllerDoacoes.js";

// Importa o Router do Express (serve para criar rotas separadas do server.js)
import { Router } from "express";

// Cria uma instância do roteador
const router = Router();

// Rota GET -> usada para buscar/listar as doações no banco
router.get('/doacoes', getDoacoes);

// Rota POST -> usada para adicionar uma nova doação
router.post('/doacoes', addDonation);

// Rota PUT -> usada para atualizar uma doação existente
router.put('/doacoes/:id', updateDonation);

// Rota DELETE -> usada para deletar uma doação específica
// Recebe dois parâmetros na URL: id e uuid
router.delete('/doacoes/:id/:uuid', deleteDonation);

// Exporta o router para ser usado no server.js
export default router;