const db = require("mysql");
const connection = db.createConnection({
	host:"localhost",
	user: "root",
	password: "Slayer666",
	database: "newswise_db"
});

module.exports = connection;
