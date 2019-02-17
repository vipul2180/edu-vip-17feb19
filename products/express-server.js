const express = require('express');

var getFormattedDate = require('./utils/date-utils').getFormattedDate;
var getFormattedTime = require('./utils/time-utils').getFormattedTime;

//create an application object

const app = express();



// On application we set up routes. Routes are incoming urls.
//GET,PUT,POST and DELETE requests.

app.get('/',function(req,res){
   
   res.send('Hi, I am express.')
});

app.get('/date',function(req,res){   
    
    res.send(getFormattedDate(new Date()));
 });

 app.get('/time',function(req,res){   
    
    res.send(getFormattedTime(new Date()));
 });

 app.get('*',function(req,res){
    res.send('not sure what you are looking for!!!');
 })

var port = process.env.PORT||8080;

app.listen(port,function(error){
    if (error) {
        console.log('Server not started at port: ' +port);
        consoles.error(error);
        process.exit(1);
    }
    else{
        console.log('Server started at port: ' +port);
    }
})

