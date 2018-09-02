module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/articles')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);

  app.route('/api/articles/:articleId')
	.get(articles.read)
    .delete(users.requiresLogin, articles.delete);

	app.route('/api/article/edit/:articleId')
	.get(articles.read)
	.put(users.requiresLogin, articles.update);


// 	app.route('/ViewArticle/:articleId').get(users.requiresLogin,articles.ViewArticle);
// 	app.route('/EditArticle/:articleId').get(users.requiresLogin,articles.EditArticle);

app.param('articleId', articles.articleByID); 
 



}
