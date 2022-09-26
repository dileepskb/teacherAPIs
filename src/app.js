const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// app.get("/", (req, res)=>{
//     res.send("hello from the other sides test");
//  });

//create teachers
app.post("/teachers", (req, res)=>{
   res.send("hello from the other sides ");
});

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});