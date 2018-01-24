var express = require('express');
var router = express.Router();
// var db = require("../config/db.js");
const db = require("mysql");
const connection = db.createConnection({
	host:"localhost",
	user: "root",
	password: "Slayer666",
	database: "newswise_db"
});
/* GET news page. */
router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM articles ORDER BY popular DESC"
    connection.query(sql, function(err, results){
    	if (err) throw err;
    	res.render("popular", {articles: results})
    	console.log(results);
    	connection.end();
    })
});  
   
module.exports = router;

