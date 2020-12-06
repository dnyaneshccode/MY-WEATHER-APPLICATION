const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;


// Static path.
const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partials_path);


app.set('view engine', 'hbs');
app.set('views', templates_path);
app.use(express.static(static_path));


// This is routing.
app.get("/", (req, res)=>{
    res.render("index.hbs");
})
app.get("/about", (req, res)=>{
    res.render("about.hbs");
})
app.get("/weather", (req, res)=>{
    res.render('weather.hbs');
})

app.get("*", (req, res)=>{
    res.render("404error.hbs", {
        errorMsg: 'Opps! Page Not Found.'
    });
})

app.listen(port, ()=>{
    console.log(`port is ${port}`)
})