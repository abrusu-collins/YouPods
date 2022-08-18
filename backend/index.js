const express = require("express");
const ytubes = require('ytubes');
const app = express();

async function myFunction() {
    const video = await ytubes.getVideo('ne deve ne kush')
return video;

  }

app.get("/",(req, res)=>{
    
    res.send(myFunction())
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("done")
})