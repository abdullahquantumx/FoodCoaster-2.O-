const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    orderId: { type: Number, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: String, required: true },
    amount: { type: Number, required: true },
  });
  
  const orderSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    items: [itemSchema], // Array of item objects
    totalPrice: { type: Number, required: true },
    Restaurant: { type:String, required: true },
    timestamp: { type: Date, default: Date.now },
});


// Create the Order model
const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
