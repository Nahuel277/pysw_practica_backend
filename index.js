const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
const transactionRoutes = require('./routes/transaction.route.js');
const spectatorRoutes = require('./routes/spectator.route.js');
const ticketRoutes = require('./routes/ticket.route.js');

var app = express();
//middlewares
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/product.route.js'));
app.use('/api/transaccion', transactionRoutes);
app.use('/api/espectador', spectatorRoutes);
app.use('/api/ticket', ticketRoutes);
//app.use('/api/agente', require('./routes/agente.route.js'));
//app.use('/api/sector', require('./routes/sector.route'));
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log('Servidor iniciando en el puerto', app.get('port'));
});