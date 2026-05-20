const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Onboarding route
router.post('/onboarding', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        res.status(201).json({ message: 'User onboarded successfully', user: newUser });
    } catch (error) {
        console.error('Error onboarding user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Fetch all users for the Dashboard table newest first
router.get('/dashboard-data', async (req, res) => {
  try {
    // 1. Fetch the users from the database
    const users = await User.find();
    
    // 2. Sort them using standard JavaScript (Newest first)
    users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error fetching dashboard data' });
  }
});

module.exports = router;