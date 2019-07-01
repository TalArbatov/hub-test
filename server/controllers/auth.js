const jwt = require("jsonwebtoken");
const config = require("../../config");
const authService = require('../services/auth');
const localLoginSuccess = (req, res, next) => {
  //passport handler attachtest req.user
  const user = {
    _id: req.user._id
  };
  const secret = config.JWTsecret;
  jwt.sign(user, secret, { expiresIn: config.JWTexp }, (err, token) => {
    if (err) res.status(501);
    else res.send({ token, user: req.user });
  });
};

const localSignup = async (req,res,next) => {
    const form = req.body;
    const existingUser = await authService.getUserByEmail(form.email)
    const isValidForm = await authService.validateSignupForm(form, existingUser);
    if(!isValidForm.success)
        return res.status(400).send(isValidForm.messages)
    const initUser = authService.initializeUser(form);
    const savedUser = await authService.saveUser(initUser)
    if(!savedUser)
    return res.status(400).send(['Error saving user to DB'])
    return res.send(savedUser)
    
}

module.exports = {
  localLoginSuccess,
  localSignup
};
