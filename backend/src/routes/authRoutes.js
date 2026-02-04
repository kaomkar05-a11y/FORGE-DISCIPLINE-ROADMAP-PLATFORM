const express = require('express');
const { register, login } = require('../controllers/authController');
const { validateRequest } = require('../middlewares/validateRequest');
const { registerSchema, loginSchema } = require('../validation/authValidation');

const router = express.Router();

router.post('/register', validateRequest(registerSchema), register);
router.post('/login', validateRequest(loginSchema), login);

module.exports = { authRoutes: router };
