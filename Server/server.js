var express= require('express');
// var mongojs = require('mongojs');
var bodyParser= require('body-parser');
var mongoose = require('mongoose');
var app =express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ShoppingApp',);

app.use(bodyParser.json());

var Schema = mongoose.Schema;

var registrationSchema = new Schema({
    username : String,
    name: String,
    email: String,
    password: String,
    role: String
}, {collection :'registration'});

var product = new Schema({
    productName: String,
    productDesc: String,
    price: Number
},{collection : 'Product'});


var registrationSchema = mongoose.model('registration', registrationSchema);
var productSchema= mongoose.model('Product',product);

app.use(express.static(__dirname+ "/public"));


app.post('/addProduct',function(req,res){
console.log(req.body);  
var newProduct = productSchema(req.body);
newProduct.save().then(function(doc){
     console.log('data saved');    
     res.json(doc);
});
});

app.post('/login',function(req,res){
console.log("Received a get request");    
var loginuser= req.body;
console.log(loginuser);
 registrationSchema.find(loginuser, function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});


app.get('/getProduct',function(req,res){
    productSchema.find({},function(err,docs){
            res.json(docs);
    });
});




app.get('/user',function(req,res){
    console.log('ger user is called');
    registrationSchema.find({},function(err,docs){
            console.log(docs);
            res.json(docs);
            
    });
});

app.get('/user/:_id',function(req,res){
    console.log('ger user by id is called');
    console.log(req.params);
    registrationSchema.findOne(req.params,function(err,docs){
            console.log(docs);
            res.json(docs);
    });
});


app.post('/user',function(req,res){
      console.log('Add User is called');
      var newUser = new registrationSchema(req.body); 
        newUser.save().then(function(doc)
        {
            console.log('data saved');    
            res.json(doc);
        });
});




app.get('/getProductbById',function(req,res){
    console.log(req.query);
    productSchema.find(req.query,function(err,docs){
            res.json(docs);
    });
});

app.post('/register',function(req,res){
console.log(req.body);    
        var newUser = new registrationSchema(req.body); 
        newUser.save().then(function(doc)
        {
            console.log('data saved');    
            res.json(doc);
        });
});


app.listen(3000);
console.log('server running at port 3000');