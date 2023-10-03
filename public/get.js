const dbConnect = require('./public/mongodb');

// const main = async () =>{
//     let data = await dbConnect();    
//     data = await data.find().toArray()
//     console.log(data)
// }
// main()


dbConnect().then((resp) =>{
    resp.find().toArray().then((data) =>{
        console.log(data)
    })
})