const validator = require("validator")
const { response } = require("express")
const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')
const dotenv = require('dotenv')


dotenv.config()


const auth = {
    auth: {
        api_key: process.env.APIKEY,
        domain: process.env.DOMAIN
    }

}

const transporter = nodemailer.createTransport(mailGun(auth))



let Contact = function (email, subject, message)
{
    this.email = email
    this.subject = subject
    this.message = message
    this.errors = []
    this.success = []

 
}

Contact.prototype.send = function()
{

   
    let mailOptions = {
        from: "contactus@moneymatters.com",
        to: process.env.EMAIL,
        subject: this.subject,
        text: this.email +" "+ "said: " + this.message
    
    }

    transporter.sendMail(mailOptions, function (err,data){
        return console.log("This is the error" +err + " " +"This is the data" + data );
     
        
    })
    
    this.success.push("Message sent successfully!")

}


module.exports = Contact