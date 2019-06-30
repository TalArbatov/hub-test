
 const jwt = require('jsonwebtoken')
const config = require('../../config')

 const localSignupSuccess = (req,res,next) => {
     //passport handler attachtest req.user
 const user = {
    _id: req.user._id
    //email: req.user.email
  };
  const secret = config.JWTsecret;
  jwt.sign(user, secret, { expiresIn: config.JWTexp }, (err, token) => {
    if (err) res.status(501);
    else res.send(token);
  });
 }

module.exports = {
    localSignupSuccess
}