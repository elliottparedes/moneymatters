const Subscribe = require('../models/Subscribe')

exports.upload =async function (req,res) {
        console.log("Router was able to call the subscribe controller")
        console.log("The post request contains the following data " + req.body.email)
        let subscribe = new Subscribe(req.body.email);
        subscribe.cleanUp()
        await subscribe.validate()
        await subscribe.upload()
        
        if(subscribe.errors.length > 0)
        {
            req.flash('errors',subscribe.errors)    
        }
        
        else  
        {
                req.flash('success',subscribe.success)
        }
        req.session.save(function(){
            res.redirect("/subscribe")    
        })
        
        
}