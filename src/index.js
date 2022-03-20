const express = require('express');
const moongoose = require('./db/mongoose');
const User = require('./models/User');
const Task = require('./models/Task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users',async (req,res) => {
      const user =  new User(req.body);
      try{
        await user.save()
        res.status(201).send(user)
      }catch(error){
           res.status(400).send({
               status:res.statusCode,
               error
           });
      }  
});

app.get('/users/:id', async (req,res) => {

  const _id = req.params.id
  
  try {

          const user = await User.findById(_id);
          if(!user){
            return res.status(404).send({
              status:res.statusCode,
              headers : res.getHeaders()
            })
          }
          res.status(200).send(user);
  }
  catch(error){
    res.status(500).send({
       status:res.statusCode,
       message:error
    })
  }
  
})

app.get('/users',async (req,res) => {

  try{

    const users = await User.find({});
    res.status(200).send(users);
     
  }catch(error){

      res.status(500).send({
        status:res.statusCode,
        error
      })
  }
})

app.post('/tasks',(req,res) => {
    const task = new Task(req.body);
    task.save().then(() => {
         res.status(201).send(task)
    }).catch((error) => {
     res.status(400).send(error);
    })
})

app.get('/tasks',(req,res) => {

  Task.find({}).then((tasks) => {
    res.status(200).send(tasks);      
}).catch(error => {
 res.status(500).send(error);
})
})

app.get('/tasks/:id',(req,res) => {
  const _id = req.params.id
  Task.findById(_id).then((task) => {  
         if(!task){
              return res.status(404).send({
                message:"No data provided",
                status:res.statusCode,
              });
         }
        res.status(200).send(task);
  }).catch((error) => {
       res.status(500).send(error);
  })
    
})

app.listen(port,() => {
    console.log('Server is up on port ' + port);
});


