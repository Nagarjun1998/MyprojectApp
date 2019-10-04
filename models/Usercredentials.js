const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{type:String},
    email: {type: String,required: 'Email can\'t be empty',unique:true},
    password: {type: String,required: 'Password can\'t be empty',
    minlength : [4,'Password must be atleast 4 character long']},
    Technolgies: {type: String},
    yearsofExperience: {type: String},
    Facilities: {type: String},
    role: {type: String},
    Timestart: {type:String},
    linkedinUrl: {type: String},
    contactno: {type: String}
    

});
UserSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

UserSchema.methods.comparePassword = function(password){
    return password.toString().trim() === this.password.toString().trim();
};
module.exports = mongoose.model('Userdata',UserSchema)



