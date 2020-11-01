// npm packages imports //
const express = require('express');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
var validator = require("email-validator");

// Application Manager //
const app = express();
const port = process.env.PORT || 8080 ;

// Path of Various folders //
const staticPath = path.join( __dirname , '../public/');

// Static Web Page InFo //
app.use(express.static(staticPath));

// App Routing //
app.get("/" , (req , res) => {
    res.sendFile(index.html);
});

// listenning to the server port : 8080 //
app.listen(port , () => {
    console.log(chalk.red.bgBlue.bold('http://127.0.0.1:8080'));
});

// Sample Email validator //
console.log(validator.validate("test@email.com")); 