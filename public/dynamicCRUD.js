const express = require('express')
const { deleteOne } = require('./public/products')
 require("./public/config")
 const products = require('./public/products')
 const app = express()

 app.use(express.json())
 app.post('/create', async (req, resp) =>{

    let data = new products(req.body)
    let result = await data.save();
    console.log(result)
    resp.send(result)
    

 });

 app.get('/list', async(req, resp) =>{
    let data = await products.find();
    resp.send(data)
 });

 app.delete('/delete/:_id', async(req, resp) =>{
    console.log(req.params)
    let data = await products.deleteOne(req.params)
    resp.send("done")
    
 });

 app.put('/update/:_id', async(req, resp) =>{
    console.log(req.params)

    let data = await products.updateOne(
        req.params,
        {
            $set: req.body
        }
    )
    resp.send(data)
 })
 app.listen(9000)