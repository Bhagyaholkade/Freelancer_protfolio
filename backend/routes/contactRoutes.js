const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const {
  submitContact,
  getContacts,
  updateContactStatus
} = require('../controllers/contactController');

// Validation middleware
const contactValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('phone')
    .optional()
    .trim()
    .matches(/^[\d\s\-\+\(\)]+$/)
    .withMessage('Please provide a valid phone number'),
  body('projectType')
    .notEmpty()
    .withMessage('Project type is required')
    .isIn(['fullstack', 'aiml', 'academic', 'other'])
    .withMessage('Invalid project type'),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters')
];

// Routes
router.post('/', contactValidation, submitContact);
router.get('/', getContacts);
router.put('/:id', updateContactStatus);

module.exports = router;
