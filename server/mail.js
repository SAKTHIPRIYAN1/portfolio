
import express from 'express';
import nodemailer from "nodemailer";
import 'dotenv/config';

let mailRoute=express.Router();


mailRoute.get("/",async (req,res)=>{
  return res.status(200).json({msg:'hiii dude'});
})

mailRoute.post("/",async (req,res)=>{
    const {name,email,message}= req.body;
    // console.log("connect success..")
    
    let {PMAIL,PPASS}= process.env;
const transporter =  nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: PMAIL,
      pass:PPASS,
    },
  });  

  const mailOptions={
    from:{
        name:name,
        address:PMAIL,
    },
    to: ["sakthipriyan417@gmail.com"],
    subject: "Portfolio response from "+email,
    text:" This is the message from ur portfoilio",
    html:`<b>${message}</b>` 
  }
 
    try{
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ msg: 'success' });
    } catch(err){
        return res.status(500).json({ msg: 'cant send mail at the moment.. ' });
 
    }


})



  export default {mailRoute};
