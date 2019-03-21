// exports.myDateTime = function () {
//   return Date();
// };

var mysqlModel = require('mysql-model');

var MyAppModel = mysqlModel.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'learn_db',
});

// MyAppModel.connect();

module.exports = MyAppModel;


// var mysql = require('mysql-model');
//     port = process.env.PORT || 4205;

// if (port === 4205) {

//     var connection = mysql.createConnection({
//         host: 'localhost',
//         port: 3306,
//         user: 'root',
//         password: '',
//         database: 'your_api',
//         insecureAuth: true
//     });
// } else {

//    //same as above, with live server details
// }

// connection.connect();

// module.exports = connection;

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "myusername",
//   password: "mypassword"
// });

// MyAppModel.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
