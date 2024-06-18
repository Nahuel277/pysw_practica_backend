const spectatorCtrl = require('../controllers/spectator.controller');
const express = require('express');
const router = express.Router();

router.post('/', spectatorCtrl.createSpectator);
router.get('/', spectatorCtrl.getAllSpectators);
router.get('/:id', spectatorCtrl.getSpectatorById);
router.delete('/:id', spectatorCtrl.deleteSpectatorById);

module.exports = router;