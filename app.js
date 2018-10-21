const express = require('express');

const app = express();


//Middle ware fn that adds a property
let logger = (req,res,next) => {
    req.manshahia = "Ravinder Singh";
    next();
};

app.use(logger);


//Index route
app.get('/',(req,res) => {
    res.send(req.manshahia);
});


//About Route
app.get('/about', (req,res) => {
    res.send("About Page");
});
const port = 3000;

app.listen(port, () =>{
    console.log(`Server started on ${port}`);
});