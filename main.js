const express = require("express");
const app = express();

app.get("/", (req,res)=>{
    res.send("Hello Nocoderssss 👋");
});


//creating a web server :: 3000
app.listen(3000);