const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    monedaOrigen: { type: String, required: true },
    cantidadOrigen: { type: Number, required: true },
    monedaDestino: { type: String, required: true },
    cantidadDestino: { type: Number, required: true },
    emailCliente: { type: String, required: true },
    tasaConversion: { type: Number, required: true }
});

const Transaction = mongoose.models.TransactionSchema || mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;