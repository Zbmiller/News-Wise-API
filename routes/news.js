var express = require('express');
var router = express.Router();
var getArticles = require('../public/js/apiCall.js');

/* GET news page. */
router.get('/', function(req, res, next) {
    var article = getArticles()
        .then(results => {
        	console.log(results);
            res.render('news', {article: results})
       		});
	});  
   
module.exports = router;
