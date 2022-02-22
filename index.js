const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path");
const ejsMate = require("ejs-mate");

app.engine('ejs' , ejsMate);
app.set("view engine" , "ejs");
app.use(express.static("public"));

app.get('/' , (req , res) => {
    res.render("index");
});

app.listen(PORT , () => {
    console.log(`Listening on port ${PORT}...`);
})