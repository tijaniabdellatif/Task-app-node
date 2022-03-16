//CRUD operations
const {MongoClient,ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL,{ useNewUrlParser : true },(error,client)  => {

    

     if(error){

        return console.log('Unable to connect to database');
     }

     const db = client.db(databaseName);

     db.collection("users").count({

          name:"TIJANI"
     },(error,num) => {

        console.log("the count is : " + typeof(num));
     });

     db.collection('users').countDocuments({

          name:'amine'
     },(error,result) => {

         console.log("the result is : "+ result + " the type is : " +typeof(result));
     })

    /* Findone always return one record  */
     db.collection('users').findOne({ _id: new ObjectId("62310e2ba376b89d5ca00351") },(error,user) => {

        
        if(error){
            return console.log('unable to fetch');   
        }

        console.log(user);

     })

     
    
   
     /* Return a cursor a pointer to the data */
     db.collection('users').find({ name:"TIJANI" }).toArray((error,users)=>{

        console.log(users);
     });
    
    
    
});