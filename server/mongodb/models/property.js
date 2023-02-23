import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    propertyType: { type: String, required: true},
    location: { type: String, required: true},
    price: { type: Number, required: true},
    photo: { type: String, required: true},
    surface:{ type: Number, required: true},
    bedrooms:{ type: Number, required: true, min: 1},
    bathrooms:{ type: Number, required: true, min:1}, 
    wc: { type: Number, required: true, min: 1},
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},

})

const propertyModel = mongoose.model('Property', PropertySchema);

export default propertyModel;