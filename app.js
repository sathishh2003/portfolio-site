const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const router = require('./routes/route');
const { log } = require('console');
const PORT = 3450;

app.use(express.static(path.join('views')));
app.use(bodyParser.urlencoded({extended:true}));


app.engine('hbs',engine({extname:'.hbs',layoutsDir:'views',defaultLayout:"main"}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

app.use(router);

app.listen(PORT,()=>{
    console.log(PORT+" is running now!");
})
