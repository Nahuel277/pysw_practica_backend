//import multer from '../libs/multer';

const productCtrl = require('../controllers/product.controller');

const express = require('express');
const router = express.Router();

router.post('/', productCtrl.createProduct);
router.get('/', productCtrl.getAllProducts);
router.get('/detalle/:id', productCtrl.getProductoId);
router.delete('/:id', productCtrl.deleteProduct);
router.put('/:id', productCtrl.updateProduct);
router.get('/destacados', productCtrl.getFeaturedProducts);

module.exports = router;