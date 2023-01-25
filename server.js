const app = require ('./app');
const mongoose = require('mongoose');           //chama o mongoose

mongoose.set('strictQuery', false);

require('dotenv').config({path:'variables.env'});

//conexão ao banco de dados
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});         //String de conexão como parametro
mongoose.Promise = global.Promise;              //Libernado funcionalidade para o mongoose
mongoose.connection.on('error', (error) =>{     // log de erro
    console.error("ERROR: " +error.message);
})
// Conexão com o servidor
app.set ('port', process.env.PORT || 7777);
const server = app.listen (app.get('port'),() =>{
    console.log("Servidor Roando na porta: "+server.address().port);

});
