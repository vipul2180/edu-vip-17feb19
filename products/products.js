const express = require('express');

const data = require('./products.json');

var app = express();

//GET api/products
app.get('/api/products',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data.products));
})

//GET api/reviews
app.get('/api/reviews',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(data.reviews));
})

//GET /products
app.get('/products',function(req,res){
    const prdTrans = data.products.map(
        function( product ){
            return `
            <tr> 
            <td><img src = "${product.imageUrl}" /></td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td>${product.starRating}</td>
            </tr>            
            `;
        }
    )
    res.send(`
       <!DOCTYPE html>
       <html>
           <head>
              <title> Product Catalog </title>   
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />          
           </head>
           <body class="container">
              <h1> Product Catalog </h1>
              <hr/>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr> 
                    <th>Products Image</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Rating</th>
                  </tr>
                </thead>

                <tbody>
                    ${prdTrans.join('')}
                </tbody>
              </table>
           <body>
       </html>
    
    `);
})

//GET /reviews
app.get('/reviews',function(req,res){
    const prdRev = data.reviews.map(
        function( rev ){
            return `
            <tr> 
            <td>${rev.reviewer}</td>
            <td>${rev.createdDate}</td>
            <td>${rev.title}</td>
            <td>${rev.text}</td>
            <td>${rev.starRating}</td>
            </tr>            
            `;
        }
    )
    res.send(`
       <!DOCTYPE html>
       <html>
           <head>
              <title> Product Catalog </title>   
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />          
           </head>
           <body class="container">
              <h1> Product Review Catalog </h1>
              <hr/>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr> 
                     <th>Reviewer</th>
                     <th>Creation Date</th>
                     <th>Title </th>
                     <th>Comments</th>
                     <th>Rating</th>
                  </tr>
                </thead>

                <tbody>
                    ${prdRev.join('')}
                </tbody>
              </table>
           <body>
       </html>
    
    `);
})


app.get('*',function(req,res){
    res.send('Not sure what you are looking for!!!');
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