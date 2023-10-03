// creating api with mongodb

const express = require('express')
const dbConnect = require('./mongodb')
const mongodb = require('mongodb')
const app = express();

app.use(express.json())

app.get('/', async(req, resp) =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
})

app.post('/', async(req, res) =>{
    let data = await dbConnect();
    let result = await data.insertMany(req.body)
    res.send(result)
})

app.delete('/:id', async(req, resp) =>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id: (req.params.name)})
    resp.send(result)
})

app.listen(9000)