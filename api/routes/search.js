const Userdata = require('../../models/Usercredentials')

module.exports = function(router){

    

    router.get('/search',function(req,res){
        res.send("Hello There!!!")
    })

    router.post('/search',function(req,res){

        Userdata.find({}, (err, user) => {
            if(err){
                console.log(err)
            }
            res.json({user})
            console.log(user);
        })
        
    })
}