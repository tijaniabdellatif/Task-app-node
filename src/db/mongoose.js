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

const Tasks = mongoose.model('Tasks',{
    
    title:{
        type:String,
        required:true
    },

    description:{

        type:String,
        validate(value){

            if(value === ''){

                throw new Error('must not be empty')
            }

        }
    },

    completed:{

        type:Boolean
    }

});


// const myuser = new User({

//     name:' abdellatif Tijani ',
//     email:'TIJANI@gmail.com  '
// })

// myuser.save().then((res) => {
//     console.log(res);

// }).catch((err)=>{

//     console.log(err);

// })


// // const task1 = new Tasks({

// //     title:'Task 2',
// //     description:'',
// //     completed:false
// // })

// // task1.save().then((res) => {

// //     console.log(res);
// // }).catch(error => {

// //     console.log(error);

// // })

