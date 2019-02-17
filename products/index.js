const http = require('http');

var getFormattedDate = require('./utils/date-utils').getFormattedDate;
var getFormattedTime = require('./utils/time-utils').getFormattedTime;
//var {getFormattedDate} = require('./utils/date-utils');
//var {getFormattedDate : dateFormat} = require('./utils/date-utils')

// The function is a callback function and will be called whenever there is the HTTP requests.
const server = http.createServer(function(req,res){

  var date = new Date();

  var formattedDate = getFormattedDate(date);
  var formattedTime = getFormattedTime(date);
  //var formattedDate = dateFormat(date);

  res.setHeader('Content-Type','text/html');

  res.end(formattedDate + ' ' + formattedTime);
  
  
});

// Start the web server
var port = process.env.PORT || 8080;

server.listen(port,function(error){
    if (error) {
        console.log('Server not started at port: ' +port);
        consoles.error(error);
        process.exit(1);
    }
    else{
        console.log('Server started at port: ' +port);
    }
});

process.on('uncaughtException',function(error){
    console.error('Error: ',error.message);
})



