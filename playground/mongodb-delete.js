const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('User').deleteMany({name:'Ziga'});
    //
    // db.collection('User').findOneAndDelete({_id: new ObjectID("﻿5b2bd0e190846e02a13e5b88")}).then((results) => {
    //     console.log(JSON.stringify(results, undefined, 2));
    // })

    //db.close();
});