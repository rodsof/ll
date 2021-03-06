const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {

    // check errors
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array() })
    }

    // extraer email y password
    const { email, password } = req.body;


    try {
        // check user is unique
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ msg: 'This user already exists' });
        }

        // create user
        user = new User(req.body);

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt );

        // save user
        await user.save();

        // create and sign JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        // sign el JWT
        console.log(process.env.SECRET);
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600 // 1 hora
        }, (error, token) => {
            if(error) throw error;

            // confirm message
            res.json({ token  });
        });


    } catch (error) {
        console.log(error);
        res.status(400).send('There was an error');
    }
}

exports.getUsers= async (req, res) => {
    let users = await User.find();
    return res.json(users);
}