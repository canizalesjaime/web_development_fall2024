import express from "express";
const app = express();
const port = 3000;

// the get method is a http method; http://www.facebook.com
// req is any information sent from client to server
// res is any information sent from server to client
app.get("/", (req,res) =>{ 
    //console.log(req.rawHeaders);
    res.send("<h1>GOOD BYE</h1>");
});

app.get("/about", (req,res) =>{
    //console.log(req.rawHeaders);
    res.send("<h1>About Me </h1><p>My Name is Jim</p>");
});

app.get("/contact", (req,res) =>{
    //console.log(req.rawHeaders);
    res.send("<h1>Contact Me </h1><p>888-888-8888</p>");
});

app.listen(port, () => {
    console.log("server running on port "+port);
});


