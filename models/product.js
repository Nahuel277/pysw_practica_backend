const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    featured: { type: Boolean, default: true }
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

module.exports = Product;