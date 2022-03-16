const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
       useNewUrlParser:true,
      
})

const Tasks = mongoose.model('Tasks',{
    
    title:{
        type:String,
    },

    description:{

        type:String
    },

    completed:{

        type:Boolean
    }

});

const task1 = new Tasks({

    title:'Task 1',
    description:'cleaning a house',
    completed:false
})

task1.save().then((res) => {

    console.log(res);
}).catch(error => {

    console.log(error);

})

