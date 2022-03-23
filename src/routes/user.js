const express = require('express');
const router = new express.Router();
const User = require('../models/User');

router.post('/users',async (req,res) => {
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

router.get('/users/:id', async (req,res) => {

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

router.get('/users',async (req,res) => {

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

router.patch('/users/:id',async (req,res) => {

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

router.delete('/users/:id', async (req,res) => {
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



module.exports = router;