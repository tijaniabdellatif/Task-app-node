const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
       useNewUrlParser:true,
      
})

const User = mongoose.model('User',{

    name:{
        type:String
    },

    age:{

        type:Number

    }
})

const user1 = new User({
    name:'Tijani',
    age:'miky'
});

user1.save().then((res) => {

      console.log(res)
}).catch((error) => {

    console.log(error)

});