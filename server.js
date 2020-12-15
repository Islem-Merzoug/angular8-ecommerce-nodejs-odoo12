// odoo = require('./sign-db-cnx.js');

var blog = require('./odoo-search_read-blogs');
var sr = require('./odoo-search_read-products');
var l = require('./odoo-create-Lead');
var o = require('./odoo-create-order');
var lo = require('./*login');

var session = require('express-session');
var path = require('path');


var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var cors = require('cors')
app.use(cors());

var server = app.listen(3000 ,listening);

function listening(){
    console.log('START')
}

app.get('/products', cors(), getProducts);
app.get('/product/view/:id', cors(), getProductById);      

app.get('/blogs', cors(), getBlogs);
app.get('/blog/view/:id', cors(), getBlogById);    

app.post('/createLead', cors(), createLead); 
app.post('/createOrder', cors(), createOrder); 

//GET
//Products
function getProducts(request, response) {
    // var data = request.params;
    response.send(valueJson);
    console.log('getProduct : ',valueJson);
    console.log('###########################################"');
}

function getProductById(request, response) {
    var id = request.params.id;
    for (var j = 0; j < valuee.length; j++) {
        if (valuee[j].extId == id ) {
            response.send(valuee[j]);
            console.log('getProductById : ',valuee[j]);
            console.log('###########################################"');
        }
    } 
}

//Blogs
function getBlogs(request, response) {
    response.send(blogs);
    console.log('blog : ',blogs);
    console.log('###########################################"');
}

function getBlogById(request, response) {
    var id = request.params.id;

    blogs.map((x, i) => (x.extId = i, x));

    for (var j = 0; j < blogs.length; j++) {
        if (blogs[j].extId == id ) {
            response.send(blogs[j]);
            console.log('getProductById : ',blogs[j]);
            console.log('###########################################"');
        }
    } 
}

// POST 
//Lead
function createLead(req, res) {
    console.log(req.body);
    res.send('createLead, ' + req.body)
    l.lead(req.body);
    console.log('###########################################"');
}

//Order
function createOrder(req, res) {
    console.log('createOrder: ',req.body);
    res.send('createOrder, ' + req.body)
    o.order(req.body);
    console.log('###########################################"');
}