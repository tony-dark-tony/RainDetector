const express = require('express');
const { exec } = require("child_process");
const app = express();
const axios = require('axios');
app.use(express.json())
app.get("/", (req, res)=>{
    axios.get("https://api.telegram.org/bot1937895124:AAGREoiVTtv8m22nGVoT68tsL81MxI9Ah1M/sendMessage?chat_id=-546716562&text=C%C3%B3%20m%C6%B0a");
    console.log("Requested")
})
app.listen(1212);