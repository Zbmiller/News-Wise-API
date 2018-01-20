const webhoseio = require('webhoseio');

function getArticles () {
    const client = webhoseio.config({token: '8c650a7a-68dc-4ec8-b50c-f38a5fee6b79'});
    const query_params = {
    	"q": "language:english site_type:news (site:msnbc.com OR site:reuters.com OR site:cnn.com) (size=10)",
    	"sort": "crawled"
    }

    return client.query('filterWebContent', query_params)
    .then(output => {
      
        var articleArray = [];
        
      for(i = 0; i < 10; i++) {
        var article = {
            title: output.posts[i].thread.title,
            author: output.posts[i].author,
            site: output.posts[i].thread.site,
            text: output.posts[i].text
          };  
            
            articleArray.push(article);
        
        };

        return articleArray;
    
    });
};

var results = getArticles().then(results => {
    console.log('AFTER RPOMISE')

    // console.log(results)
})

module.exports = getArticles

////////////////////////////////////// routes.js

// var getArticles = require('./utils/getArticles')

// router.get('/homepage', (req, res) => {
//     var articles = getArticles()
//         .then(results => {
//             res.render('page.handlebars', results)
//         )};
//     )};
//     