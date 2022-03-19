const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
       useNewUrlParser:true,
      
})

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

var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

const Tasks = mongoose.model('Tasks',{
    
    title:{
        type:String,
        required:true,
        trim:true,
        validate(value){

              if(format.test(value)){

                  throw new Error('The title can not contain special characters');
              }
        }
    },

    description:{

        type:String,
        required:true,
        trim:true,
        validate(value){
            if(value === ''){
                throw new Error('must not be empty')
            }

        }
    },

    completed:{

        type:Boolean,
        default:false
    }

});


// const myuser = new User({

//     name:'amine khalil',
//     email:'amine@amine.ma',
//     password:'re3356TGT'
// })

// myuser.save().then((res) => {
//     console.log(res);

// }).catch((err)=>{

//     console.log(err);

// })


 const task1 = new Tasks({

    title:'Task',
    description:'hello world'
 })

 task1.save().then((res) => {

     console.log(res);
 }).catch(error => {

     console.log(error);

});

