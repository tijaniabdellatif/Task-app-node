const express = require('express');
require('./db/mongoose');
const Task = require('./models/Task');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/task');



const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.listen(port,() => {
  console.log('Server is up on port ' + port);
});


const bycrpt = require('bcryptjs');
const myFunction =  async () => {

  const password = 'tijani@@!'
  const hashedPassword = await bycrpt.hash(password,8);
   
  console.log(password, hashedPassword)


  const isMatch = await bycrpt.compare(password,hashedPassword);
  console.log(isMatch);


}

myFunction();
