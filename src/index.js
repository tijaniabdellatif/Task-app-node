const express = require('express');
const moongoose = require('./db/mongoose');
const User = require('./models/User');
const Task = require('./models/Task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users',(req,res) => {
      const user = new User(req.body);
      user.save().then(() => {
        res.status(201).send(user);
      }).catch((error) => {
        res.status(400).send(error);
      })
});


app.get('/users/:id',(req,res) => {
      const _id = req.params.id
      User.findById(_id).then((user) => {  
             if(!user){
                  return res.status(404).send({
                    message:"No data provided",
                    status:res.statusCode,
                  });
             }

            res.status(200).send(user);

      }).catch((error) => {

           res.status(500).send(error);
      })
        
})

app.get('/users',(req,res) => {

     User.find({}).then((users) => {

         res.send(users);      

     }).catch(error => {

      res.status(500).send(error);

     })
})

app.post('/tasks',(req,res) => {
    const task = new Task(req.body);
    task.save().then(() => {
         res.status(201).send(task)
    }).catch((error) => {
     res.status(400).send(error);
    })
})

app.listen(port,() => {
    console.log('Server is up on port ' + port);
});

