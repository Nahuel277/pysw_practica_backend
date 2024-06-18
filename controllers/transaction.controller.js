const Transaction = require('../models/transaction');
const transactionCtrl = {};

transactionCtrl.createTransaction = async (req, res) => {
    const transaction = new Transaction(req.body);
    try {
        const transactionSaved = await transaction.save();
        res.status(201).json({ data: transactionSaved });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.'
        });
    }
};

transactionCtrl.getAllTransactions = async (req, res) => {
    if(req.query.emailCliente) {
        const transactions = await Transaction.find({
            emailCliente: req.query.emailCliente,
        });
        return res.status(200).json({ data: transactions });;
    }

    if(req.query.monedaOrigen && req.query.monedaDestino) {
        const transactions = await Transaction.find({
            monedaOrigen: req.query.monedaOrigen,
            monedaDestino: req.query.monedaDestino,
        });
        return res.status(200).json({ data: transactions });;
    }
    try {
        const transactions = await Transaction.find();
        res.status(200).json({ data: transactions });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = transactionCtrl;