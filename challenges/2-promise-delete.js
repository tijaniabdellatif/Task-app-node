require('../src/db/mongoose');
const Task = require('../src/models/Task');
const _id = '6235d00f346ba86ccea146d3';

// Task.findByIdAndDelete(_id).then((task) => {
//      if(task===null){
//          console.log("the task is deleted");
//      }
//       return Task.countDocuments({completed:false});
// }).then((result) => {
//        console.log("total number of imcomplete tasks : " + result)
//        return Task.findById(_id);
// }).then((result) => {
//     if(result === null){
//         return console.log('No data given ..');
//     }
//     console.log(result);
  
// }).catch(e => {
//     console.log(e);
// })


const deleteTaskAndCount = async (id) => {

   const task = await Task.findByIdAndDelete(id);

   if(task === null){
    return console.log('No data provided');
   }
   const count = await Task.countDocuments({completed:false});
   return count;
}

deleteTaskAndCount(_id).then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
})