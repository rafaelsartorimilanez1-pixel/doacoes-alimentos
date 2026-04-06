// Importa a conexão com o banco de dados
import connection from "../db.js";
import { v4 as uuidv4 } from 'uuid';




// =========================
// GET -> LISTAR DOAÇÕES
// =========================
export const getDoacoes = async (_, res) => {

    // Query para buscar todas as doações
    const q = 'SELECT * FROM doacoes'

    try {
        // Executa a query no banco
        const [results] = await connection.query(q);

        // Retorna os dados com status 200
        res.status(200).json(results)
    } catch (error) {
        // Retorna erro caso aconteça algum problema
        res.status(500).json(error)
    }
}


// =========================
// POST -> CRIAR DOAÇÃO
// =========================
export const addDonation = async (request, response) => {

    // Query para inserir dados na tabela
    const q = `INSERT INTO doacoes (uuid, alimento, quantidade, bairro, categoria, tipo) 
    VALUES(?, ?, ?, ?, ?, ?)`;

    // Valores vindos do corpo da requisição
    const values = [
        uuidv4(),
        request.body.alimento,
        request.body.quantidade,
        request.body.bairro,
        request.body.categoria,
        request.body.tipo,
    ];

    console.log(request.body)

    try {
        // Executa o INSERT no banco
        const [results] = await connection.query(q, values)

        // Retorna o resultado da inserção
        return response.status(200).json(results)
    } catch (error) {
        // Retorna erro caso falhe
        return response.status(500).json(error)
    }
}


// =========================
// PUT -> ATUALIZAR DOAÇÃO
// =========================
export const updateDonation = async (request, response) => {

    // Query para atualizar dados da tabela
    const q = `UPDATE doacoes
    SET alimento = ?, quantidade = ?, bairro = ?, categoria = ?, tipo = ?
    WHERE id = ?`

    // Valores que serão atualizados (vindos do body)
    const values = [
        request.body.alimento,
        request.body.quantidade,
        request.body.bairro,
        request.body.categoria,
        request.body.tipo,
        request.params.id, // ID da URL para identificar qual registro atualizar
    ];

    try {
        // Executa o UPDATE
        const [results] = await connection.query(q, values)

        // Retorna o resultado da atualização
        return response.status(200).json(results)
    } catch (error) {
        // Retorna erro caso falhe
        return response.status(500).json(error)
    }
}


// =========================
// DELETE -> REMOVER DOAÇÃO
// =========================
export const deleteDonation = async (request, response) => {

    // Query para deletar um registro específico
    const q = `DELETE FROM doacoes WHERE id = ? AND uuid = ?`

    try {
        // Executa o DELETE passando id e uuid da URL
        const deleteDonation = await connection.query(q, [request.params.id, request.params.uuid])

        // Retorna mensagem de sucesso
        return response.status(200).json("deletado com sucesso")
    } catch (error) {
        // Retorna erro caso falhe
        return response.status(500).json(error)
    }
}