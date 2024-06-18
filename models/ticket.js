const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    precioTicket: { type: Number, required: true },
    categoriaEspectador: { type: String, required: true },
    fechaCompra: { type: String, required: true },
    espectador: { type: mongoose.Schema.Types.ObjectId, ref: 'Spectator', required: true }
});

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;