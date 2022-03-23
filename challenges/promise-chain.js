require('../src/db/mongoose');
const Task = require('../src/models/Task');
const _id = '6235d00f346ba86ccea146d3';

// Task.findByIdAndUpdate(_id,{completed:false}).then((user) => {
//     console.log(user);
//     return Task.countDocuments({completed:true});
// }).then((result) => {
//     console.log(result);
// }).catch(e => {
//     console.log(e);
// })


const updateTaskandCount = async (id,completed) => {

   const task = await Task.findByIdAndUpdate(id,{completed:completed});
   const count = await Task.countDocuments({completed:completed});
   return count;

}


updateTaskandCount(_id,false).then(res => {
    console.log(res);
}).catch(error => {
    console.log(error);
});