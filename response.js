// const http = require('http');

// const routes = require('./routes');
const express = require('express');
const bodyParser = require('body-parser');
// function rqListener(req,res){

// }
// http.createServer(rqListener);
// http.createServer(function(req,res){

// });
// const server = http.createServer((req,res) => {
//     // console.log(req.url, req.headers,req.methods);
//     // process.exit();
//     // const url = req.url;
//     // const method = req.method;
    
// });
// console.log(routes.someText);
const app = express();
// app.use( (req,res,next) => {
//     console.log('In the middleware!');
//     next(); // Allows the request to continue to the next middleware in line
// });
// app.use('/', (req , res , next) => {
//     console.log('This always runs!');
//     next();
// });
app.use(bodyParser.urlencoded({extended: false}));
// console.log(bodyParser);
app.use('/add-product', (req , res , next) => {
    // console.log('In another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="number" name="number"><button type="submit">Add Product</button></form>');
});
app.post('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
})
app.use('/', (req , res , next) => {
    // console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});
 
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);