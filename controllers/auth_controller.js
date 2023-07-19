const User = require('../models/User');
const { createSecretToken } = require('../util/SecretToken');
const bcrypt = require('bcrypt');

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, confirmPassword, username, createdAt } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id, user.username); 
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });
    return res.status(201).json({ message: 'Signed in successfully', success: true, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'Field required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
    const token = createSecretToken(user._id, user.username);
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    });
    return res.status(201).json({
      message: 'Signed in successfully',
      success: true,
      token: token,
      username: user.username,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
