const {MongoClient} = require('mongodb');
const URl = 'mongodb://localhost:27017';
const client = new MongoClient(URl);

async function dbConnect(){
    let result = await client.connect();
    let db = result.db('e-comm');
    return db.collection('products');
    
}
module.exports = dbConnect;