const { isValidObjectId } = require('mongoose');
const Ticket = require('../models/Ticket');
const Spectator = require('../models/spectator');
const ticketCtrl = {};

ticketCtrl.getTickets = async (req, res) => {
    const query = req.query.categoria ? { categoriaEspectador: req.query.categoria } : {};
    const tickets = await Ticket.find(query).populate('espectador');
    return res.json({ data: tickets });
}

ticketCtrl.getTicketsById = async (req, res) => {
    const id = req.params.id;
    if (!id &&!isValidObjectId(id)) {
        return res.status(400).json({
        status: '400',
        message: 'El ID del ticket no es válido.',
        });
    }
    try {
        const ticket = await Ticket.findById(id);
        res.json({ data: ticket });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

ticketCtrl.createTicket = async (req, res) => {
    const ticket = new Ticket(req.body);
    try {
        const ticketSaved = await ticket.save();
        res.status(201).json({ data: ticketSaved });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
};

ticketCtrl.deleteTicket = async (req, res) => {
    const id = req.params.id;
    if (!id && !isValidObjectId(id)) {
        return res.status(400).json({
        status: '400',
        message: 'El ID del ticket no es válido.',
        });
    }

    try {
        const deleted = await Ticket.findByIdAndDelete(id);
        res.json({
        data: !!deleted,
        });
    } catch (err) {
        res.status(404).json({
        status: '404',
        message: `No se ha podido eliminar el ticket con el id '${id}'`,
        });
    }
};

ticketCtrl.editTicket = async (req, res) => {
    const id = req.body._id;
    if(!id && !isValidObjectId(id)){
        return res.status(400).json({
            'status': '0',
            'msg': 'El ID del ticket no es válido.'
        });
    }

    try {
        const ticketUpdated = await Ticket.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ data: ticketUpdated });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};
module.exports = ticketCtrl;