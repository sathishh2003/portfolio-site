const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const {engine} = require('express-handlebars');
const { log } = require('console');
const PORT = 3450;

app.use(express.static(path.join('views')));
app.use(bodyParser.urlencoded({extended:true}));


app.engine('hbs',engine({extname:'.hbs',layoutsDir:'views',defaultLayout:"main"}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));




app.use('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','about.html'));
});
app.get('/projects',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','projects.html'));
})
app.get('/resume',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','resume.html'));
})

app.get('/contact',(req,res)=>{
      
    const value = req.query.value;

    if(value === "$athish"){
        res.sendFile(path.join(__dirname,'views','contact.html'));
    }
    else{
        let code = req.query.value;
        //res.sendFile(path.join(__dirname,'views','check.html'));
        res.render('main',{code:code});

    }
});


app.listen(PORT,()=>{
    console.log(PORT+" is running now!");
})
