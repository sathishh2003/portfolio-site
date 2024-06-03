const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');


router.use('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','about.html'));
});
router.get('/projects',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','projects.html'));
})
router.get('/resume',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','resume.html'));
})

router.get('/contact',(req,res)=>{
      
    const value = req.query.value;

    if(value === "$athish"){
        res.sendFile(path.join(__dirname,'..','views','contact.html'));
    }
    else{
        let code = req.query.value;
        //res.sendFile(path.join(__dirname,'views','check.html'));
        res.render('main',{code:code});

    }
});


module.exports = router;