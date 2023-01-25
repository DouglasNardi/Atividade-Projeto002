// Fazendo a importação do Express
const express = require("express");

// Rotas (quando o servidor for acessado, pra onde ele vai?)
const router = express.Router();
router.get('/',(reg, res)=>{ //Primeira Rota // Função anonima // dois parametros
    res.send("Eu conseguir");
});

//Configuração básica do aplicativo
const app = express();
app.use('/', router); // Foi passado 1 rota pois criamos apenas 1

module.exports = app; // Exportamos o app, pois vamos importa-lo no servidor

