const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Otp = require("../models/OTP")
const nodemailer = require('nodemailer');



//REGISTER
router.post("/register", async (req, res) => {
  const response = {}
  try {
    let data = await Otp.find({email:req.body.email,code:req.body.code});
    if(data){
      let currentTime = new Date().getTime()
    let diff = data.expireIn - currentTime;
    if(diff<0){
      response.message = "Token Expired";
      response.statusText = "Error";
    }else{
      //generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      //create new user
      const newUser = new User({
      otp: req.body.otp,
      username: req.body.username,
      email: req.body.email,
      hostel : req.body.hostel,
      password: hashedPassword,
      });

      //save user and respond
      const user = await newUser.save();
      res.status(200).json(user);
    }
    }else{
      response.message = "Invalid Otp";
      response.statusText = "Error";
    }
    
  } catch (err) {
    res.status(500).json(err)
  }
});



//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});

//send email
router.post("/email-send", async (req, res) => {
  const responseType = {};
  try{
  //const user = await User.findOne({ email: req.body.email });
  //!user && res.status(404).json("user not found");
  
  let otpcode = Math.floor((Math.random()*100000)+1);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
      user: '',
      pass: ''
    }
  });
  const mailOptions = {
    from: 'poojabhatt1409@gmail.com',
    to: req.body.email,
    subject: 'Sending Email using Node.js',
    html: `<p>Enter <b>${otpcode}</b> on InlineLinkers Website</p>`,
  };
  let otpdata = new Otp({
    email:req.body.email,
    code:otpcode,
    expireIn: new Date().getTime()+300*1000
  })
  await otpdata.save();
  responseType.statusText = "Success"
  responseType.message = "Please Check your email id";
   transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("error");
    } else {
      console.log('Email sent: ' + info.response)
    }
  });
  }catch(err){
    responseType.statusText = "Error"
  responseType.message = "Invalid email id";
  }
  res.status(200).json(responseType);
});

//change password
router.post("/change-password", async (req, res) =>{
  let data = await Otp.find({email:req.body.email,code:req.body.code});
  const response = {}
  if(data){
    let currentTime = new Date().getTime()
    let diff = data.expireIn - currentTime;
    if(diff<0){
      response.message = "Token Expired";
      response.statusText = "Error";
    }else{
      let user = await User.findOne({email:req.body.email});
      user.password = req.body.password;
      user.save;
      response.message = "Password Changed Successfully";
      response.statusText = "Success";
    }
  }else{
    response.message = "Invalid Otp";
    response.statusText = "Error";
  }
  res.status(200).json(data);
});






module.exports = router;
