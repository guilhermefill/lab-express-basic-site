const express = require('express');
const app = express();

app.use(express.static('public'));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views")

app.listen(3000, () => {
    console.log("listening on port 3000...");
})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/works', (req, res) => {
    res.render('works')
})

app.get('/photos', (req, res) => {
    res.render('photos')
})
