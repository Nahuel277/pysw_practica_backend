const ticketCtrl = require('../controllers/ticket.controllers');

const express = require('express');
const router = express.Router();

router.post('/', ticketCtrl.createTicket);
router.get('/', ticketCtrl.getTickets);
router.get('/detalle/:id', ticketCtrl.getTicketsById);
router.delete('/:id', ticketCtrl.deleteTicket);
router.put('/:id', ticketCtrl.editTicket);
//router.get('/categoria/:categoriaEspectador', ticketCtrl.getEspectadoresByCategoria);

module.exports = router;