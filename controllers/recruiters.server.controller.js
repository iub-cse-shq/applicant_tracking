var mongoose = require('mongoose');
var Resumee = require('./../models/Resumee.js');
var Client = require('./../models/Client.js');
var Article = require('./../models/Article.js');
var JobOpening = require('./../models/JobOpening.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Resumee.find(function(err, data) {
    if (err) {
      return res.status(400).send({
  		message: errorHandler.getErrorMessage(err)
  	   });
    } else {
      console.log("api cakjhkjulled"); 
      res.status(200).send(data);  
    }
  });
};

module.exports.create = function(req, res) {
  var resumee = new Resumee(req.body);
  resumee.user = req.user;
  resumee.save(function(err, data) {
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
  res.json(req.resumee);
};

exports.delete = function(req, res) {
	var resumee = req.resumee;
	resumee.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(resumee);
		}
	});
};
//// CLIENT API 
module.exports.Clientlist = function(req, res) {
   Client.find(function(err, data) {
    if (err) {
      return res.status(400).send({
  		message: errorHandler.getErrorMessage(err)
  	   });
    } else {
      console.log("api cakjhbjlled"); 
      res.status(200).send(data);  
    }
  });
};

module.exports.createClient = function(req, res) {
  var client = new Client(req.body);
  client.user = req.user;
  client.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.updateClient = function(req, res) {
	 var client = req.client;
  	client = _.extend(client, req.body);
  	client.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(client);
  		}
  	});
};


//// BLOG API

module.exports.createArticle = function(req, res) {
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

module.exports.Articlelist = function(req, res) {
   Article.find(function(err, data) {
    if (err) {
      return res.status(400).send({
  		message: errorHandler.getErrorMessage(err)
  	   });
    } else {
      console.log("api ckjhikhualled"); 
      res.status(200).send(data);  
    }
  });
};

module.exports.updateArticle = function(req, res) {
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

//// JOB API 
module.exports.Joblist = function(req, res) {
   JobOpening.find(function(err, data) {
    if (err) {
      return res.status(400).send({
  		message: errorHandler.getErrorMessage(err)
  	   });
    } else {
      console.log("api callekjbkjd"); 
      res.status(200).send(data);  
    }
  });
};
module.exports.createJob = function(req, res) {
  var jobOpening = new JobOpening(req.body);
  jobOpening.user = req.user;
  jobOpening.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};
module.exports.updateJob = function(req, res) {
	 var jobOpening = req.jobOpening;
  	jobOpening = _.extend(jobOpening, req.body);
  	jobOpening.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(jobOpening);
  		}
  	});
};
/// TRACK APPLICANT 
module.exports.track = function(req, res) {
	Resumee.find({title: req.body.title}).exec(function(err, resumee) {
		if (err) console.error(err);
		if (!resumee) {resumee=null;}
		req.resumee = resumee;
		// console.log(resumee);
		res.json(resumee);
	});
};

module.exports.Dashboard = function(req, res) {
     
    res.render('./../public/views/recruiter/Dashboard.ejs', {
		user: req.user || null, 
		request: req
	});
};

module.exports.CareerBlog = function(req, res) {
     
    res.render('./../public/views/recruiter/CareerBlog.ejs', {
		user: req.user || null, 
		request: req
	});
};

module.exports.CreateArticle = function(req, res) {
     
    res.render('./../public/views/recruiter/CreateArticle.ejs', {
		user: req.user || null, 
		request: req
	});
};

module.exports.ViewArticle = function(req, res) {
     
    res.render('./../public/views/recruiter/ViewArticle.ejs', {
		user: req.user || null, 
		request: req
	});
};

module.exports.EditArticle = function(req, res) {
     
    res.render('./../public/views/recruiter/EditArticle.ejs', {
		user: req.user || null, 
		request: req
	});
};

// module.exports.DeleteArticle = function(req, res) {
     
//     res.render('./../public/views/recruiter/ViewArticle.ejs', {
// 		user: req.user || null, 
// 		request: req
// 	});
// };

module.exports.createEmail = function(req, res) {
  var email = new email (req.body);
  email.user = req.user;
 email.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};


module.exports.TrackApplicants = function(req, res) {
     
    res.render('./../public/views/recruiter/TrackApplicants.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.Applicants = function(req, res) {
     
    res.render('./../public/views/recruiter/Applicants.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.CreateApplicant = function(req, res) {
     
    res.render('./../public/views/recruiter/CreateApplicants.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.ViewApplicant = function(req, res) {
     
    res.render('./../public/views/recruiter/ViewApplicant.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.EditApplicant = function(req, res) {
     
    res.render('./../public/views/recruiter/EditApplicant.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.Clients = function(req, res) {
     
    res.render('./../public/views/recruiter/Clients.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.CreateClients = function(req, res) {
     
    res.render('./../public/views/recruiter/CreateClients.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.ViewClient = function(req, res) {
     
    res.render('./../public/views/recruiter/ViewClient.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.EditClient = function(req, res) {
     
    res.render('./../public/views/recruiter/EditClient.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.JobOpenings = function(req, res) {
     
    res.render('./../public/views/recruiter/JobOpenings.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.CreateJobOpenings = function(req, res) {
     
    res.render('./../public/views/recruiter/CreateJobOpenings.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.ViewJobOpening = function(req, res) {
     
    res.render('./../public/views/recruiter/ViewJobOpenings.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.EditJobOpening = function(req, res) {
     
    res.render('./../public/views/recruiter/EditJobOpenings.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.CareerTips = function(req, res) {
     
    res.render('./../public/views/recruiter/CareerTips.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.Emails = function(req, res) {
     
    res.render('./../public/views/recruiter/Emails.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.Tests = function(req, res) {
     
    res.render('./../public/views/recruiter/Tests.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.UserAdministration = function(req, res) {
     
    res.render('./../public/views/recruiter/UserAdministration.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.aboutUs = function(req, res) {
     
    res.render('./../public/views/recruiter/aboutUs.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.AddNewRecruiter = function(req, res) {
     
    res.render('./../public/views/recruiter/AddNewRecruiter.ejs', {
		user: req.user || null, 
		request: req
	});
};

exports.recruiterByID = function(req, res, next, id) {
	Resumee.findById(id).populate('user', 'email').exec(function(err, resumee) {
		if (err) return next(err);
		if (!resumee) return next(new Error('Failed to load resumee ' + id));
		req.resumee = resumee;
		next();
	});
};

exports.resumeByID = function(req, res, next, id) {
	Resumee.findById(id).populate('user', 'email').exec(function(err, resumee) {
		if (err) return next(err);
		if (!resumee) return next(new Error('Failed to load resumee ' + id));
		req.resumee = resumee;
		next();
	});
};
exports.clientByID = function(req, res, next, id) {
	Client.findById(id).populate('user', 'email').exec(function(err, client) {
		if (err) return next(err);
		if (!client) return next(new Error('Failed to load client ' + id));
		req.client = client;
		next();
	});
};
exports.jobByID = function(req, res, next, id) {
	JobOpening.findById(id).populate('user', 'email').exec(function(err, jobOpening) {
		if (err) return next(err);
		if (!jobOpening) return next(new Error('Failed to load jobOpening ' + id));
		req.jobOpening = jobOpening;
		next();
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
