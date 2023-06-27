const express = require("express");
const router = express.Router();
const currency = require("currency-converter-lt");

const secureAPI = ((req, res, next) => {
    console.log("i m middleware");
    next();
});
 
router.get("/", (req,res) => {
    //res.send({ msg: "Hello from UI"});
    res.render("index");
});
router.get("/contact", (req,res) => {
    res.render("contact");
});
router.get("/converter/:currency1/:currency2/:value",secureAPI,async(req,res) =>{
    
    const{ currency1, currency2 ,value} = req.params;
   //console.log({ currency1, currency2, value} req.params;
        const currencyConverter = new currency({
            from:currency1,
            to:currency2,
            amount: Number(value),
        });
        const result = await currencyConverter.convert();
        res.send(`Currency price of ${value}  ${currency1}  in ${currency2} is ${result}`);

    //initialize currency package
    //put the code from prev exercise
    //pass the value as variable in the code
    //store the result in a variable called result
    // const result ="";
    // res.send(`Hello ${result}`);

});
module.exports = router;
