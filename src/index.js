const express = require('express');
 require('./db/mongoose');
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

app.patch('/users/:id',async (req,res) => {

  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name','email','password','age'];
  const IsValid = updates.every((item) =>  allowedUpdates.includes(item));
  if(!IsValid){
      return res.status(400).send({
        error:'Invalid updates'
      })
    }
     try {

        const user = await User.findByIdAndUpdate(_id,req.body,{
          new:true,
          runValidators:true
        });

        if(!user){
          return res.status(404).send({
              status:res.statusCode,
              message:'Not Found'
          })
        }

        res.status(200).send(user);

       
     } catch (error) {
       
          res.status(400).send(error);
     }
});

app.delete('/users/:id', async (req,res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if(!user){

        res.status(404).send({

            status:res.statusCode,
            message:'Not Found'
        })
    }

    res.status(200).send(user);
    
  } catch (error) {
     
      res.status(500).send(error);
  }
})

app.post('/tasks',async (req,res) => {
    const task = new Task(req.body);
  try {

    await task.save();
    res.status(201).send(task)
  
      } catch (error) {
          res.status(500).send({

              status:req.statusCode,
               error,
          })
       }
})

app.get('/tasks',async (req,res) => {

  try {

     const tasks = await Task.find({});
     res.status(200).send(tasks);
    
  } catch (error) {
    
      res.status(500).send({
           status:res.statusCode,
           error
      })
  }
 
})

app.get('/tasks/:id',async (req,res) => {
  const _id = req.params.id

  try {
    
      const task = await Task.findById(_id);
      if(!task){
         
          return res.status(404).send({
            status:res.statusCode,
            message: res.statusMessage
          })
      }

      res.status(200).send(task)
  } catch (error) {
    
      res.status(500).send({
        status:res.statusCode,
        error
      })
  }

})

app.patch('/tasks/:id',async (req,res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['title','description','completed'];
  const IsValid = updates.every((item) =>  allowedUpdates.includes(item));
  if(!IsValid){
    return res.status(400).send({
      error:'Invalid updates'
    })
  }
  try {

     const task = await Task.findByIdAndUpdate(_id,req.body,{
       new:true,
       runValidators:true
     });

     if(!task){
       return res.status(404).send({
           status:res.statusCode,
           message:'Not Found'
       })
     }
     res.status(200).send(task);
  } catch (error) {
    
       res.status(400).send(error);
  }

})

app.patch('/tasks/:id',async (req,res) => {
 
  const _id = req.params.id;
  try {
    const task = await Task.findByIdAndDelete(_id);
    if(!task){

        res.status(404).send({

            status:res.statusCode,
            message:'Not Found'
        })
    }

    res.status(200).send(task);
    
  } catch (error) {
     
      res.status(500).send(error);
  }

})

app.listen(port,() => {
    console.log('Server is up on port ' + port);
});


