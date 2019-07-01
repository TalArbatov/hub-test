const mongoose = require('mongoose');
const User = mongoose.model('User');

const getUserByEmail = async email => {
    const user = User.findOne({email})
    if(user)
        return user;
    else return null;
}

const validateSignupForm = async (form, user) => {
    const {email, password, confirmPassword} = form;

    const toReturn = {
        success: true,
        messages: []
    }

    if(user) {
        toReturn.success = false;
        toReturn.messages.push('Email already in use.')
    }
    //validate passwords
    if(password != confirmPassword) {
        toReturn.success = false;
        toReturn.messages.push('Passwords must match')
    }
    else if(!password) {
        toReturn.success = false;
        toReturn.messages.push('Please enter a password')
    }
    else if(password.length < 4 || password.length > 8) {
        toReturn.success = false;
        toReturn.messages.push('Password must be between 4 to 8 characters')
    }
    if(!email) {
        toReturn.success = false;
        toReturn.messages.push('Please enter email address')   
    }
    else if(email.length < 4 || email.length > 8) {
        toReturn.success = false;
        toReturn.messages.push('Email must be between 4 to 8 characters')
    }
    return toReturn   
}

const initializeUser = form => {
    const {email, password} = form;
    const newUser = new User({
        email, password
    })
    return newUser;
}

const saveUser = async user => {
    user.save((err, doc) => {
        if(err)
            return null;
        else return doc
    })
}

module.exports = {
    getUserByEmail,
    validateSignupForm,
    initializeUser,
    saveUser
}