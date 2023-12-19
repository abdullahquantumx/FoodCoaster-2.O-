const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Order = require('../models/Order');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Orders using: GET "/api/orders/fetchallorders". Login required
router.get('/fetchallorders', fetchuser, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id });
        res.json(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});

// ROUTE 2: Add a new Order using: POST "/api/orders/addorder". Login required
router.post('/addorder', fetchuser, [
    body('items', 'Items must be provided and must be an array').isArray().notEmpty(),
    body('items.*.orderId', 'Order ID must be provided').isNumeric(),
    body('items.*.name', 'Name must be provided').notEmpty(),
    body('items.*.quantity', 'Quantity must be a valid number').isNumeric(),
    body('items.*.price', 'Price must be provided').notEmpty(),
    body('items.*.amount', 'Amount must be a valid number').isNumeric(),
    body('Restaurant', 'Restaurant name must be given').notEmpty(),
    body('totalPrice', 'Total price must be a valid number').isNumeric(),
], async (req, res) => {
    try {
        const {items,totalPrice,Restaurant } = req.body; // Include 'quantity' in the destructuring assignment

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const order = new Order({
            userId: req.user.id,
            items,
            totalPrice,
            Restaurant,
        });

        const savedOrder = await order.save();
        res.json(savedOrder);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


module.exports = router;
