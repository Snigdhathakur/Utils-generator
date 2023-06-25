const express = require("express");
const router = express.Router();
 
router.get("/", (req,res) => {
    res.send({ msg: "Hello from UI"});
});

module.exports = router;