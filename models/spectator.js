const mongoose = require('mongoose');

const spectatorSchema = new mongoose.Schema({
    apellido: { type: String, required: true },
    nombre: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }
});

const Spectator = mongoose.models.Spectator || mongoose.model('Spectator', spectatorSchema);

module.exports = Spectator;