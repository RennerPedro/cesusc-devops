// src/app.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Porta padrão 3000

// Configura o servidor para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define o endpoint para /index
app.get('/index', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
});
