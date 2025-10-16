const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
// app.set(express.static("public")) 
// near top, BEFORE any app.get routes
app.use(express.static(path.join(__dirname, '/public/css')));  // ⭐⭐⭐⭐⭐
app.use(express.static(path.join(__dirname , "/public/js")))  // ⭐⭐⭐⭐⭐
app.set("view engine", "ejs"); // SETTING EJS 
app.set("views", path.join(__dirname, "views")) 



app.get("/ig/:username", (req, res) => {
    let { username } = req.params // GETTING USERNAME FROM URL 
    const instaData = require("./data.json"); // REQUIRING JSON 
    const data = instaData[username]  // GETTING DATA FROM JSON 
    
    console.log(data.name) // FROM URL TO TERMINAL 

    if ( data ) {

        res.render("insta", { data }) // RENDERING EJS 

    } else {
        res.render("error") // IF NOT FOUND THEN SHOW THIS IN THE HTML PAGE 
    }
})



// DICE ROLL
app.get("/DICEROLL", (req, res) => {
    const DICE_VALUE = Math.floor(Math.random() * 6) + 1; // THIS DATA IS COMING FROM DB
    res.render("DiceRoll", { DICE_VALUE: DICE_VALUE });
});


// IT START THE SERVER AND LISTEN FOR THE REQUEST
app.listen(port, () => {
    console.log("APPLICATION IS RUNNING AT PORT", port);
});


// ROUTING 
app.get("/apple", (req, res) => {
    // console.log(req)
    res.send("THIS IS AN APPLE")
})

// ROUTING 
app.get("/:username", (req, res) => {
    const { username } = req.params // STORE THE VALUE WHICH WAS PASSED IN THE ROUTE
    res.send(`USERNAME -----> ${username}`) // SHOW IN HTML PAGE 
})


// IT WILL TAKE ALL ROUTING 
app.use((req, res) => {
    console.log("REQUEST DONE") // WHEN WE SHARE THE REQ ON WEBSITE THEN IT WILL SHOW THE REQUEST DONE

    res.send("<ul><li>HELLO WORLD</li></ul>");  // SENDING HTML

    // const OBJ = {
    //     name : "krishna",
    //     age : 19,
    //     gender : "male"
    // }
    // res.send(OBJ)  // SENDING OBJ 
}) 
