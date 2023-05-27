const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otp = new Schema({
    email:String,
    password:String
})

const otpModel = mongoose.model('otp',otp)

module.exports = otpModel;