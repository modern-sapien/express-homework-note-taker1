const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 8080;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// GET ROUTES
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf-8", (err,data) =>  {
        if(err){
            console.log(err);
            return res.status(500).json({
                error: true,
                data: null,
                message: "unable to retrieve notes."
            });
        }
        res.json({
            error: false,
            data: JSON.parse(data),
            message: "successfully retrieved notes.",
        });
    })
})

// POST ROUTES - NOTES
app.post("/api/notes", (req, res) =>    {
    console.log(req.body);
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({
                error: true,
                data: null,
                message: "Unable to add a new note.",
            }) 
        };
        console.log(data);
        const updatedData = JSON.parse(data);
        updatedData.push(req.body);
        console.log(updatedData);
        fs.writeFile("./db/db.json", JSON.stringify(updatedData, null, 2), (err)   =>  {
            if (err) throw err;
            res.json({
                error: false,
                data: null,
                message: "Successfully added new note."
            });
        })
    })
});

app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
})

// GET ROUTES


