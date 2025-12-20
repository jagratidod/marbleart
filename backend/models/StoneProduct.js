const mongoose = require('mongoose');

const stoneProductSchema = new mongoose.Schema({
    categoryId: { type: String, required: true, ref: 'StoneCategory' }, // e.g. 'sandstone'
    name: { type: String, required: true },
    image: {
        url: { type: String, required: true },
        alt: { type: String }
    },
    // Optional additional images for a detail view if needed later
    images: [{
        url: { type: String },
        alt: { type: String }
    }],
    specifications: {
        origin: { type: String },
        color: { type: String },
        finish: { type: String },
        offeredIn: { type: String },
        dimensions: { type: String }, // 'Tiles Size'
        price: { type: String }
    },
    description: { type: String },
    displayOrder: { type: Number, default: 0 },
    inStock: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('StoneProduct', stoneProductSchema);
