const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },

    password:{

        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
               throw new Error('The password must be greater than 6 character');
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positif value');
            }
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            } 
        }
    }

});

module.exports = User;