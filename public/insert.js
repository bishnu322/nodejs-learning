const dbConnect = require('./mongodb');

const insert = async () =>{
    const db =await dbConnect();
    const result = db.insertOne(
        {
            name: "vivo v23",
            brand: "vivo",
            price: "400",
            categoried: "mobile"
        }
    )
}
insert()