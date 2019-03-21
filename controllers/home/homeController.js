var mysqlModel = require('mysql-model');
var MyModelApp = mysqlModel.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'learn_db',
});

product = new MyModelApp({tableName: "products"});
category = new MyModelApp({tableName: "categories"});
	
module.exports = function(app){


	// Home page route.
	app.get("/", function(req, res) {
		product.find('all', {where: "product_status = 1", limit: [0, 12]}, function(err, rows, fields) {
			var product = rows;
			category.find('all', {where: "status = 1"}, function(err, rows, fields) {
				var categorie = rows;
			    res.render("home/index", {products:  product, categories: categorie });
			});
		});
	   	
	});

	app.get("/cat/:categoryId", function(req, res) {
		// res.send(req.params.categoryId);
		// category.find('first', {where: "status = 1 AND id = "+ req.params.categoryId}, function(err, row, fields) {
			category.find('first',  {where: "slug = '"+req.params.categoryId+"'"}, function(err, row) {

			// res.send(row.name);
			product.find('all', {where: ["product_status = 1 AND category_id = "+row.id], limit: [0, 12]}, function(err, rows, fields) {
				var product_category = rows;
			// 	// res.send(products);
				    res.render("home/product/product_category", {product_category:  product_category });
				
			});
		});
	   	
	});



	// exports.about = function(req, res) {
	//     // res.send('NOT IMPLEMENTED: Site Home Page');
	//    	res.render("home/about");
	// };

};
// About page route.
// router.get('/about', function (req, res) {
//   res.send('About this wiki');
// })

// module.exports = router;