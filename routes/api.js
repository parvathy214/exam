const express = require('express');
const otpModel= require('../model/otp')
var router = express.Router();
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


router.post('/sendotp', async (req, res) => {
    const { email } = req.body;
  
    try {
      // Generate random OTP
      const otp = Math.floor(100000 + Math.random() * 900000);
  
      // Save OTP to the database
      await otpModel.create({ email, otp });
  
      // Send OTP via email
      const transporter = nodemailer.createTransport({
        // Configure your email service provider here
      });
  
      await transporter.sendMail({
        from: 'p4parvathy214@gmail.com',
        to: email,
        subject: 'OTP Verification',
        text: `Your OTP is: ${otp}`,
      });
  
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

module.exports=router