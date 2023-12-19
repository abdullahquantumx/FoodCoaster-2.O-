const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the schema for the contact information
const contactSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // You might want to add additional validation for email format
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: { type: Date, default: Date.now },
});

// Create a Mongoose model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
