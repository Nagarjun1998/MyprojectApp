const express = require('express')
const jwt = require('jsonwebtoken')
const Userdata = require('../../models/Usercredentials')

module.exports = function(router){

    function verifyToken(req, res, next) {
        if(!req.headers.authorization) {
          return res.status(401).send('Unauthorized request')
        }
        let token = req.headers.authorization.split(' ')[1]
        if(token === 'null') {
          return res.status(401).send('Unauthorized request')    
        }
        let payload = jwt.verify(token, 'secretKey')
        if(!payload) {
          return res.status(401).send('Unauthorized request')    
        }
        req.userId = payload.subject
        next()
      }

    router.get('/userdata',function(req,res){
        res.send("Hello There!!!")
    })

    router.post('/userdata',function(req,res){
        let note = new Userdata(req.body)
        note.save(function(err,note){
            if(err){
                if (err.code == 11000)
                res.json({code:422});
                //res.status(422).send(['Duplicate email adrress found.']);
                 else
                return res.status(400).json(err)
               
            }
            else{
                let payload = {subject : note._id}
                let token = jwt.sign(payload,'secretKey')
                // res.status(200).json(note);
                res.status(200).json({note,token});


            }
        })
    })

  }










