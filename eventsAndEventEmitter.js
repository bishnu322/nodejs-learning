const express  = require('express')
const EventEmitter = require('events')
const app = express()
const event = new EventEmitter;
let count = 0;
 
event.on("countAPI", () =>{
    count++;
    console.log("API called", count)
    
})

app.get("/dis", (req, resp) =>{
    resp.send("api called");
    event.emit("countAPI")
})

app.get("/disc", (req, resp) =>{
    resp.send("search api called");
    event.emit("countAPI")
})

app.get("/disco", (req, resp) =>{
    resp.send("upload api called");
})

app.listen(9000)