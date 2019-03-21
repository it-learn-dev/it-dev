

var express = require('express')
var route = express();
route.use(express.static(__dirname + '/public'));


// var respon = require("./module1");
// const Square = require('./module/connect');
// const mySquare = new Square(2);
// console.log(`The area of mySquare is ${mySquare.area()}`);

 // console.log(greetings);
 // set the view engine to ejs
// app.set('view engine', 'ejs');
// let template = ejs.compile(str, options);
// template(data);
route.set('view engine', 'ejs');
// var dt = require('config/connection');
var MyAppModel = require("path").join(__dirname, "config/connect");
// var db = require('../config/connection'); 
// var requireDir = require('require-dir');
// var dir = require('./module1');

// var Author = require('../controllers/router');
var homeControll = require('./controllers/home/homeController');



// var mysqlModel = require('mysql-model');

// var MyModelApp = mysqlModel.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'booking_db',
// });
// var mysqlModel = require('mysql-model');

// var MyAppModel = mysqlModel.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'booking_db',
// });
// // console.log(dir.exports());

// tour = new MyAppModel({tableName: "tours"});


// var MyModelApp = mysqlModel.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'learn_db',
// });

// product = new MyModelApp({tableName: "products"});

// 	product.find('all', {where: "tour_status = 1"}, function (err, rows, field){
// 	    res.send(rows);
// 	}); 



route.get('/', homeControll.index);
route.get('/about', homeControll.about);

// app.get('/', function (req, res) {

// 	// tour.find('all', {where: "tour_status = 1"}, function (err, rows, field){
//  //    res.send(field[1]);
//  //  }); 
//  // res.render("home/index");

// });
 
route.listen(3000);