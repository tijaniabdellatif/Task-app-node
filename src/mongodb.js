//CRUD operations
const {MongoClient,ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id.id.length)
console.log(id.toHexString().length);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL,{ useNewUrlParser : true },(error,client)  => {


     if(error){

        return console.log('Unable to connect to database');
     }

   

     const db = client.db(databaseName);

    //  db.collection('users').insertOne({

    //      _id:id,
    //      name:'abdellatif tijani',
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

        // db.collection('tasks').insertMany([

        //      {
        //          title: "task #1",
        //          description:"Making a camp",
        //          date:new Date("2021-03-15"),
        //          completed:true
        //      },

        //      {
        //         title: "task #2",
        //         description:"Eating a breafast",
        //         date:new Date("2021-03-16"),
        //         completed:false
        //     }

        // ],(error,result) => {

        //     if(result.insertedCount === 2){

        //         return console.log('inserted successfully');
        //     }

        //     else {

        //         return console.log(error);
        //     }
        // });

        
});