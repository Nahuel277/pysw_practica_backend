const Spectator = require('../models/spectator');
const spectatorCtrl = {};

spectatorCtrl.createSpectator = async (req, res) => {
    const spectator = new Spectator(req.body);
    try {
        const spectatorSaved = await Spectator.create(spectator);
        res.json({ data: spectatorSaved });
    } catch (error) {
        res.status(400).send(error);
    }
};

spectatorCtrl.getAllSpectators = async (req, res) => {
    try {
        const spectators = await Spectator.find();
        res.json({ data: spectators });
    } catch (error) {
        res.status(400).send(error);
    }
};

spectatorCtrl.getSpectatorById = async (req, res) => {
    const id = req.params.id;
        if(!id && !isValidObjectId(id)){
            return res.status(400).json({
                status: '0',
                msg: 'ID no valido'
            });
        }
    try {
        const spectator = await Spectator.findById(id);
        res.json({ data: spectator });
    } catch (error) {
        res.status(400).send(error);
    }
};

spectatorCtrl.deleteSpectatorById = async (req, res) => {
    const id = req.params.id;
        if(!id &&!isValidObjectId(id)){
            return res.status(400).json({
                status: '0',
                msg: 'ID no valido'
            });
        }
    try {
        const deleted = await Spectator.findByIdAndDelete(id);
        res.json({ data: !!deleted });
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = spectatorCtrl;