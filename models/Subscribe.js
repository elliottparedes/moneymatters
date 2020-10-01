const emailCollection = require('../db').db().collection("newsletter_emails")
const ObjectID = require('mongodb').ObjectID
const validator = require("validator")
const { response } = require("express")

let Subscribe = function (data)
{
    this.data = data
    console.log("we are connected to the Subscribe controller yay! this is the email " +data)
    this.errors = []
    this.success = []


}

Subscribe.prototype.upload =async function()
{

    

    if(this.errors.length ==0)
    {
        await emailCollection.insertOne({email: this.data})
        this.success.push("Thank you for signing up for our newsletter!")
    }
   
    
    console.log("These are the errors:" + this.errors)
    

}


Subscribe.prototype.cleanUp = function(){

   
    if(typeof(this.data) != "string"){this.data = ""}
   
    //get rid of any bogus properties
    this.data = this.data.trim().toLowerCase()

 
}


Subscribe.prototype.validate =async function () 
{
   
        if (!validator.isEmail(this.data)) 
        {
            this.errors.push("You must provide a valid email address.")
            
        }

        if(validator.isEmail(this.data))
        {
            let emailExists = await emailCollection.findOne({email: this.data})
            if(emailExists) 
            {
                this.errors.push("This email is already subscribed to our newsletter")
                
            }
        }
        
        
        

}

module.exports = Subscribe