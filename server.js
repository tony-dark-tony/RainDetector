const express = require('express');

const app = express();
app.use(express.json())
app.post("/", (req, res) => {
    var status = req.body.status;
    try{
        if(status == "1"){
            //Playing command
            console.log("Raining")
        }
        if(status == "0"){
            //Stop command
            console.log("Stopped")
        }
        res.sendStatus(200)
    }catch(err){
        res.send(err)
    }
})
app.listen(1212);