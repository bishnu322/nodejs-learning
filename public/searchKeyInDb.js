const express = require('express')
// const { deleteOne } = require('./public/products')
 require("./public/config")
 const products = require('./public/products')
 const app = express()

 app.use(express.json())
// to search single data from database

//  app.get('/search/:key', async(req, resp) =>{
//     console.log(req.params.key)

//     let data = await products.find(
//         {
//             "$or":[
//                 {"name": {$regex:req.params.key}}
//             ]
//         }
//     )
//     resp.send(data)
//  })

// to search multiple data from database 
 app.get('/search/:key', async(req, resp) =>{
    console.log(req.params.key)

    let data = await products.find(
        {
            "$or":[
                {"name": {$regex:req.params.key}},
                {"brand": {$regex:req.params.key}},
                {"category": {$regex:req.params.key}},
            ]
        }
    )
    resp.send(data)
 })

app.listen(9000)