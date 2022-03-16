//CRUD operations
const {MongoClient,ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL,{ useNewUrlParser : true },(error,client)  => {
     if(error){

        return console.log('Unable to connect to database');
     }

     const db = client.db(databaseName);

 
     const stringID = '62310f9b5aec19edfcc97365';

     db.collection('users').updateOne({

        _id:new ObjectId(stringID)
     },{

      $inc:{
          
         age: 1
      }

     }).then((resutl) => {
        console.log(resutl);
     }).catch((error) => {

      console.log(error);

     })
    
    
});