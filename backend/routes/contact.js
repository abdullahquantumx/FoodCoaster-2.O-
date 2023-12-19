const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Contact = require('../models/Contact'); // Import the Contact model

// Route to handle POST requests for saving contact information
router.post(
  '/contacts',
  [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter your name').notEmpty(),
    body('message', 'Enter your message').notEmpty(),
  ],
  async (req, res) => {
    try {
      // Check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, message } = req.body;

      // Create a new contact instance using the Contact model
      const newContact = new Contact({
        name,
        email,
        message,
      });

      // Save the contact information to the database
      const savedContact = await newContact.save();

      res.status(201).json(savedContact); // Use status 201 for resource creation
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

module.exports = router;
