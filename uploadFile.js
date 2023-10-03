const express = require('express');
// const { deleteOne } = require('./public/products')
//  require("./public/config")
//  const products = require('./public/products')
 const app = express();
 const multer = require('multer')

const upload = multer({
    storage:multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, "uploads")
        },
        filename: function(req, file, cb){
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")

app.post('/upload',upload, (req, resp) =>{
    resp.send("file uploaded")
})
 app.use(express.json())

app.listen(9000)