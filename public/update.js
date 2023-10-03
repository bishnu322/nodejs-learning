const dbConnect = require('./mongodb');

const update = async () =>{
    let data = await dbConnect();
    let result = data.updateOne(
        {
            name:"vivo v20"
        }, 
        {
            $set:{name:"vivo v20", price: 5000}
        }
    )
    console.log("data is updated.........")
}
update()