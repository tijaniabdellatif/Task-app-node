const mongoose = require('mongoose');
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
