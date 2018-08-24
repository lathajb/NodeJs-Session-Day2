var express = require('express');

var app = express(); // single ton object

app.get("/",(req,res)=>{

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
    //res.send("Hello Express");
    //res.sendFile('index.html',{root:__dirname});
    res.json(products);
    
});

app.listen(3000,()=>{
    console.log("Server running @ 3000");
})

