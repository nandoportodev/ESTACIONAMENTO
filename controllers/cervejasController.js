// cervejasController.js

const database = require('../database');

// Função para registrar a entrada de veículos
exports.registrarEntrada = (req, res) => {
    const { placa } = req.body;

    // Verifica se a placa foi enviada
    if (!placa) {
        return res.status(400).send({ error: 'Placa do veículo não fornecida' });
    }

    // Insere a placa do veículo no banco de dados
    database.query('INSERT INTO entradas (placa) VALUES ($1)', [placa])
        .then(() => {
            res.status(200).send({ message: 'Entrada registrada com sucesso' });
        })
        .catch((error) => {
            console.error('Erro ao registrar entrada:', error);
            res.status(500).send({ status: 'Erro de database' });
        });
};
