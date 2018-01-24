// requirements

var Article = require("../models/article.js");

//////////routes//////////
module.exports = function(app) {


	app.post("/recentArticle", function(req, res) {
     // Create an Author with the data available to us in req.body
    console.log(req.body);
    Article.create(req.body.title)
    	.then(function(dbArticle) {
	      res.json(dbArticle);
	    });
	    // .catch(function(error) {
	    // 	res.json({message: error.message})
	    // })
  });


}