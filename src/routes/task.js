const express = require('express');
const router = new express.Router();
const Task = require('../models/Task');

router.post('/tasks',async (req,res) => {
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
  
  router.get('/tasks',async (req,res) => {
  
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
  
  router.get('/tasks/:id',async (req,res) => {
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
  
  router.patch('/tasks/:id',async (req,res) => {
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
  
  router.patch('/tasks/:id',async (req,res) => {
   
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

  
  module.exports = router;