var express = require('express');
var path = require('path');
var bodyParser = require("body-parser");


var app = express();


var router  = express.Router();


router.route('/products/:name/:size').get((req,res)=>{
     var products = [
         {name:'Mobile',price :20000,testFunc: function(){
            console.log('hello inside json');
         }},
         {name:'LED TV',price :20000},
         {name:'Laptop',price :200000},
         {name:'Mat',price :2000},
         {name:'Bicycle',price :20000},
         {name:'lunch bag',price : 200}
    ];


    var n = req.params.name;
    var s = req.params.size;

    if(n){
        console.log(n);
        console.log(s);
        res.json(products[1]);
    }else{
      res.json(products);
    }
   
});

app.use(bodyParser.urlencoded({extended:false})); // in the form of key value pair

app.use('/data',router);

app.get('/',(req,res)=>{
 res.sendFile('UsingExpress/index.html', {'root': '../'});
 //res.sendFile('index.html',{root:__dirname});
});

app.get('/postData',(req,res)=>{
 //res.sendfile('UsingExpress/postData.html', {'root': '../'});
 res.sendFile('postData.html',{root:__dirname});
});

app.post('/login',(req,res)=>{
    console.log('Posted from client');
    var name = req.body.username;
    var pwd = req.body.password;
    console.log("Name :" + name + "pwd :" + pwd);
    res.send('sucess');
});


// place it at last
app.use((req,res)=>{
    res.statusCode= 404;
    res.send("Page not found");
});

app.listen(3000,()=>{
    console.log('Server running @ 3000');
});