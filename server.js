const express = require('express');
const { exec } = require("child_process");
const app = express();
app.use(express.json())
app.get("/", (req, res)=>{
    exec("speaker-test -c2 --test=wav -w /usr/share/sounds/alsa/Front_Center.wav", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
})
app.listen(1212);