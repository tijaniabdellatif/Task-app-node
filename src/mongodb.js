//CRUD operations
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

mongoClient.connect(connectionURL,{ useNewUrlParser : true },(error,client)  => {


     if(error){

        return console.log('Unable to connect to database');
     }

   

     const db = client.db(databaseName);

    //  db.collection('users').insertOne({
        
    //      name:'TIJANI',
    //      age:33

    //  },(error,result) => {

    //       if (error){

    //         return console.log('Unable to insert user');
    //       }


    //        console.log(result);
    //  });
     

        // db.collection('users').insertMany([

        //     {
        //         name:'karim',
        //         age:14,
        //     },
        //     {
        //         name:"amine",
        //         age:19
        //     }
        // ],(error,result) => {

        //     if(error){

        //         return console.log('unable to insert those');
        //     }

        //     console.log(result);
        // })

});