// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const { check } = require('express-validator');

// Create an user
// api/usuarios
router.post('/', 
    [
        check('name', 'Name is mandatory').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'Minimum length: 6 characters').isLength({ min: 6})
    ],
    userController.createUser
);

router.get('/',
    userController.getUsers
)

module.exports = router;