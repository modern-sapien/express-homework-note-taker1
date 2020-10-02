const express = require("express");
const path = require("path");
const {v4: uuidv4 } = require("uuid");
const fs = require("fs");
const PORT = process.env.PORT || 8080;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join("./public")));

//API GET ROUTES
app.get("/api/notes", function(req, res){
    return res.sendFile(path.join(__dirname, "db/db.json"))
});

// API POST ROUTES - NOTES
app.post("/api/notes", (req, res) =>    {
    console.log(req.body);
    fs.readFile("db/db.json", "utf-8", (err, data) => {
        if(err) {
        console.log(err);
        return res.json({
            error: true,
            data: null,
            message: "Unable to get note."
        });
    }
    const updatedData = JSON.parse(data);
    req.body.id = uuidv4();
    // switch out updatedData with uuidv4() 
    updatedData.push(req.body);
    console.log(updatedData);
    fs.writeFile("db/db.json", JSON.stringify(updatedData), (err) =>  {
        if(err) {
            console.log(err);
            return res.json({
                error: true,
                data: null,
                message: "Unable to save note.",
            });
        }
        res.json({
            error: false,
            data: updatedData,
            message: "successfully added new note.",
        });
     })
  })
})

// DELETE 
app.delete("/api/notes/:id", (req, res) =>  {
    console.log(req.body)
    fs.readFile("db/db.json", "utf-8", (err, data) =>{
        if(err) {
            console.log(err);
            return res.json({
                error: true,
                data: null,
                message: "unable to get note."
            });
        }
    const updatedData = JSON.parse(data).filter(function (data) {
        return data.id != req.params.id;
    });
    // updatedData.push(req.body);
    // console.log(updatedData);
    fs.writeFile("db/db.json", JSON.stringify(updatedData), (err) =>    {
        if (err)    {
            console.log(err);
            return res.json({
                error: true,
                data: null,
                message: "unable to save note"
            })
        }
        res.json({  error: false,
                    data: updatedData,
                    message: "successfully rewrote saved notes without the targetted delete."
            })
        })
    });
})

// GET ROUTE HTML
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
});





app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
})




