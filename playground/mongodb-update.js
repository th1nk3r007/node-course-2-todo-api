const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5b2be3b9ac5b44dd4a289c46")
    }, {
        $set: {
            completed: true
        }
    }, {

        returnOriginal: false

    }).then((result) => {
        console.log(result);
    }) ;

    //db.close();
});