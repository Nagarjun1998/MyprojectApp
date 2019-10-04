const express = require('express')
const jwt = require('jsonwebtoken')
const Userdata = require('../../models/Usercredentials')

module.exports = function(router){

    

    router.get('/login',function(req,res){
        res.send("Hello There!!!")
    })

    router.post('/login',function(req,res){
        if (!req.body.email) {
          res.json({ success: false, message: 'No username was provided'}); // Return error
        } 
        else {
            // Check if password was provided
            if (!req.body.password) {
              res.json({ success: false, message: 'No password was provided.' }); // Return error
            } 
            else {
             // Check if username exists in database
              
              Userdata.findOne({ "email": req.body.email.toLowerCase() }, (err, user) => {
                // Check if error was found
                if (err) {
                  res.json({ success: false, message: err }); // Return error
                } 
                else {
                  // Check if username was found
                  if (!user) {
                    res.json({ success: false, message: 'Username not found.' }); // Return error
                   }
                  else {
                        const validPassword = user.comparePassword(req.body.password); // Compare password providedto password in database
                        // Check if password is a match
                        if (!validPassword) {
                      res.json({ success: false, message: 'Password invalid' }); // Return error
                        } 
                        else {

                          let payload = {subject : user._id}
                          let token = jwt.sign(payload,'secretKey')
                          // res.status(200).send({token})

                        res.json({
                        success: true,
                        message: 'Success!',
                        token: token,
                        user: {
                          username: user.email,
                          role: user.role,
                         }
                         }) // Return success and token to frontend
                        }
                    }    
                }
                
            });
        }  
                
        }
          
        
    });
    
}










