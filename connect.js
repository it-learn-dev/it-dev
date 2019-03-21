var mysqlModel = require('mysql-model');

module.exports = function(){
	var MyModelApp = mysqlModel.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'learn_db',
	});
}


// return mysqlModel;
// module.exports = MyModelApp;