var express = require('express');

var app = express();


var router  = express.Router();


router.route('/products').get((req,res)=>{
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
    res.json(products);
});


app.use('/data',router);

app.get('/',(req,res)=>{
 res.sendFile('index.html',{root:__dirname});
});

// place it at last
app.use((req,res)=>{
    res.statusCode= 404;
    res.send("Page not found");
});

app.listen(3000,()=>{
    console.log('Server running @ 3000');
});