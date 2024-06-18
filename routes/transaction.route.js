const transactionCtrl = require('../controllers/transaction.controller');

const express = require('express');
const router = express.Router();

router.post('/', transactionCtrl.createTransaction);
router.get('/', transactionCtrl.getAllTransactions);
// router.get('/cliente/:email', transactionCtrl.getTransactionsByEmail);
// router.get('/divisas/:monedaOrigen/:monedaDestino', transactionCtrl.getTransactionsByCurrency);

module.exports = router;