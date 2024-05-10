// routes.js

const express = require('express');
const router = express.Router();
const cervejasController = require('../controllers/cervejasController');

// Rotas para registrar a entrada de veículos
router.post('/registrar-entrada', cervejasController.registrarEntrada);

module.exports = router;
