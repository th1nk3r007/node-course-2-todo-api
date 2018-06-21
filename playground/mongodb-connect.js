//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//
// MONGO DESTRUCTURING
// var obj = new ObjectID();
// console.log(obj);

// OBJ DESTRUCTURING
// var user ={name: 'andrew', age:25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server')

    // db.collection('Todos').insertOne({
    //     text:"something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2);
    // });

    // db.collection('Users').insertOne({
    //     _id: 123,
    //     name:"Ziga",
    //     age: 24,
    //     location: "Texas"
    // }, (err, result) => {
    //     if (err){
    //         return console.log('Unable to insert ser', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

    db.close();
});