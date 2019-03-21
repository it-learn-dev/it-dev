

var express = require('express')
var route = express();
route.use(express.static(__dirname + '/public'));


route.set('view engine', 'ejs');
// var MyAppModel = require("path").join(__dirname, "config/connect");

var homeControll = require('./controllers/home/homeController');



// home saction
// route.get('/', homeControll.index);
// route.get('/about', homeControll.about);
homeControll(route);
 

var mysqlModel = require('mysql-model');
var MyModelApp = mysqlModel.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'learn_db',
});

product = new MyModelApp({tableName: "products"});

route.get('/product', function (req, res) {

	product.find('all', {where: "product_status = 1 "}, function(err, rows, fields) {
		
	    res.send(rows);
	});
  
})



route.listen(3000);