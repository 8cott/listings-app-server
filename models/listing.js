// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose

// Schema
const listingSchema = new Schema ({
    address: { type: String },
    apt_num: { type: String },
    city: { type: String },
    state: { type: String },
    zip_code: { type: Number },
    neighborhood: { type: String },
    borough: { type: String },
    status: { type: String },
    property_type: { type: String },
    bedrooms: { type: Number },
    bathrooms: { type: Number },
    price: { type: String },
    square_feet: { type: Number },
    price_per_sq_ft: { type: String },
    description: { type: String, required: true, default: '' },
    image_url: { type: String, default: 'https://www.compass.com/m/0/940c8f21-f17a-486b-89da-f581aab5376e/640x480.jpg' }
})

// model and export
const Listing = mongoose.model('Listing', listingSchema)
module.exports = Listing