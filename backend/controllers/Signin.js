const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.signin = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(409).json({ message: "user already exist" })
        bcrypt.genSalt(10, (err, salt) => {
            if (err) res.status(500).send(err);
            
            bcrypt.hash(password, salt, async (error, hash) => {
                if (error) res.status(500).send(error);
                const user = new User({ name, email, password: hash });
                await user.save();
    
                const token = jwt.sign({ email: email,userName:name,userID:user._id }, process.env.KEY, { expiresIn: '1h' });
                
                
                res.cookie('token',token,{
                    httpOnly:true,
                    secure:false,
                    
                });
                
                
                res.status(200).json({ message: "user signed in" })
            })

        })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}