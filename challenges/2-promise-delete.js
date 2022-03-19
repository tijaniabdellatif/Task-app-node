require('../src/db/mongoose');
const Task = require('../src/models/Task');
const _id = '6235c0c7b8ce4f4f552ec118';

Task.findByIdAndDelete(_id).then((task) => {
     if(task===null){
         console.log("the task is deleted");
     }
      return Task.countDocuments({completed:false});
}).then((result) => {
       console.log("total number of imcomplete tasks : " + result)
       return Task.findById(_id);
}).then((result) => {
    if(result === null){
        return console.log('No data given ..');
    }
    console.log(result);
  
}).catch(e => {
    console.log(e);
})
