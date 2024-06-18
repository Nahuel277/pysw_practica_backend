const { isValidObjectId } = require('mongoose');
const Product = require('../models/product');
const productCtrl = {};

productCtrl.createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const productSaved = await product.save();
        res.status(201).json({ data: productSaved });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operación.'
        });
    }
};

productCtrl.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length === 0) {
            return res.status(404).json({
                'status': '0',
                'msg': 'No se encontraron productos.'
            });
        }
        res.status(200).json({
            'status': '1',
            'msg': 'Productos recuperados con éxito.',
            'data': products
        });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};

productCtrl.getProductoId = async (req, res) => {
    try {
        const producto = await Product.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({
                status: '0',
                msg: 'Producto no encontrado'
            });
        }
        res.json(producto);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error procesando la operación.'
        });
    }
};


productCtrl.deleteProduct = async (req, res) => {
    const id = req.params.id;
    if(!id &&!isValidObjectId(id)) {
        return res.status(400).json({
            'status': '0',
            'msg': 'El ID del producto no es válido.'
        });
    }
    try {
        const productDeleted = await Product.deleteOne({ _id: id });
        res.json({ data:!!productDeleted });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};

productCtrl.updateProduct = async (req, res) => {
    const id = req.body._id;
    if(!id && !isValidObjectId(id)) {
        return res.status(400).json({
            'status': '0',
            'msg': 'El ID del producto no es válido.'
        });
    }
    try {
        const producto = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ data: producto });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};

productCtrl.getFeaturedProducts = async (req, res) => {
    try {
        const productsFeatured = await Product.find({ featured: true });
        res.json({ data: productsFeatured });
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operación.'
        });
    }
};

module.exports = productCtrl;