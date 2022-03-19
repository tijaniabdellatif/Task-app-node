require('../src/db/mongoose');
const Task = require('../src/models/Task');
const _id = '6235c0c7b8ce4f4f552ec118';

Task.findByIdAndUpdate(_id,{completed:false}).then((user) => {
    console.log(user);
    return Task.countDocuments({completed:true});
}).then((result) => {
    console.log(result);
}).catch(e => {
    console.log(e);
})

