const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'
const database = 'e-commerce'
const client = new MongoClient(url);

async function dbConnect() {
    // let result = client.connect();
    // let db = result.db(database);

    // Await the connection to MongoDB
    await client.connect();

    // Now that the connection is established, get the database
    const db = client.db(database);

    return db.collection('products');
    // let responce = await collection.find({}).toArray();
    // console.log(responce);
    // await client.close();
}

module.exports = dbConnect;