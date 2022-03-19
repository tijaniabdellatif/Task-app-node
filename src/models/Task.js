const mongoose = require('mongoose');
const Tasks = mongoose.model('Tasks',{
    
    title:{
        type:String,
        required:true,
        trim:true
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

module.exports=Tasks;
