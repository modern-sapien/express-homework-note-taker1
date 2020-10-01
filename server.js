const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 8080;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));



// POST ROUTES
app.post("/api/notes", (req, res) =>    {
    console.log(req.body);
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if(err) throw err;
        console.log(data);
    })
})

app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
})

// GET ROUTES


