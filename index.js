const express = require("express");

const app= express();

app.get("/", (reg, res) => {
    res.send("Hello World");
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});