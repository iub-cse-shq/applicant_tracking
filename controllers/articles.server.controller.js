var mongoose = require('mongoose');
var Article = require('./../models/Article.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Article.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called"); 

      res.status(200).send(data);  
    }
  });
};

module.exports.create = function(req, res) {
  var article = new Article(req.body);
  article.user = req.user;
  article.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.article);
};

exports.delete = function(req, res) {
	var article = req.article;
	article.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(article);
		}
	});
};


module.exports.update = function(req, res) {
  var article = req.article;

  	article = _.extend(article, req.body);

  	article.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(article);
  		}
  	});
};
module.exports.singleView = function(req, res) {
     
    res.render('./../public/views/article/view.ejs', {
		user: req.user || null, //meaning ?  
		request: req
	});
};
module.exports.showContent = function(req, res) {
     
    res.render('./../public/views/article/showContent.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.createView = function(req, res) {
     
    res.render('./../public/views/article/new.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.listView = function(req, res) {
  Article.find(function(err, data) {
        if (err) {
          return res.status(400).send({
    
      				message: errorHandler.getErrorMessage(err)
      			});
        } else {
          console.log("api called");
    
            res.render('./../public/views/article/all.ejs', {
        		user: req.user || null,
        		request: req,
        		articles: data
        	});
        }
  });
  
  	
};


exports.articleByID = function(req, res, next, id) {
	Article.findById(id).populate('user', 'email').exec(function(err, article) {
		if (err) return next(err);
		if (!article) return next(new Error('Failed to load article ' + id));
		req.article = article;
		next();
	});
};




