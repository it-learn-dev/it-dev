
var mysqlModel = require('mysql-model');

module.exports = mysqlModel.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'booking_db',
});

// module.exports = MyApp;

// exports.myDateTime = function () {
//   return Date();
// };