const Contact = require('../models/Contact')

exports.send = function (req,res) {

        let contact = new Contact(req.body.email, req.body.subject, req.body.message)
       
    
        contact.send();
           
        
    
        if(contact.errors.length > 0)
        {
            req.flash('errors',contact.errors)    
        }
        
        else  
        {
                req.flash('success',contact.success)
                req.session.save(function()
                {
                    res.redirect("/contactUs")
                })
        }

            
        
        


        
             
}