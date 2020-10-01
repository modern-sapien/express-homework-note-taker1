const express = require("express");
const path = require("path");

const PORT = 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
})


// s
app.get("/notes", function(req, res)    {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
});

app.get("/api/notes", function(req, res)    {
    res.json()
});


// POST creating a note
app.post("/api/notes", function(req, res)   {
    const notes = fs.writeFile(JSON.stringify(req.body));
    res.json(notes);
})

// DELETE for deleting previously saved notes


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
});
