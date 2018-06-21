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
    console.log('Connected to MongoDB Server');

    // MONGO FIND
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b2bdc40ac5b44dd4a289b52')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    db.collection('Users').find({name: 'Ziga'}).toArray().then((docs) => {
        //console.log(`Users, Ziga:  ${count}`);
        console.log(JSON.stringify(docs, undefined, 2));
        // }, (err) => {
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.close();
});