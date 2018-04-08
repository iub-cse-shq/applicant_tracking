var mongoose = require('mongoose');
var Resumee = require('./../models/Resumee.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Resumee.find(function(err, data) {
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


module.exports.update = function(req, res) {
  var resumee = req.resumee;

  	resumee = _.extend(resumee, req.body);

  	resumee.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(resumee);
  		}
  	});
};
module.exports.singleView = function(req, res) {
     
    res.render('./../public/views/resumee/view.ejs', {
		user: req.user || null, //meaning ?  
		request: req
	});
};
module.exports.showContent = function(req, res) {
     
    res.render('./../public/views/resumee/showContent.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.createView = function(req, res) {
     
    res.render('./../public/views/resumee/new.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.listView = function(req, res) {
  Resumee.find(function(err, data) {
        if (err) {
          return res.status(400).send({
    
      				message: errorHandler.getErrorMessage(err)
      			});
        } else {
          console.log("api called");
    
            res.render('./../public/views/resumee/all.ejs', {
        		user: req.user || null,
        		request: req,
        		resumees: data
        	});
        }
  });
};

module.exports.Dashboard = function(req, res) {
     
    res.render('./../public/views/recruiter/dashboard.ejs', {
		user: req.user || null, 
		request: req
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
     
    res.render('./../public/views/recruiter/CreateApplicant.ejs', {
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
module.exports.ViewJobOpenings = function(req, res) {
     
    res.render('./../public/views/recruiter/ViewJobOpenings.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.EditJobOpenings = function(req, res) {
     
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
module.exports.CreateNewUser = function(req, res) {
     
    res.render('./../public/views/recruiter/CreateNewUser.ejs', {
		user: req.user || null, 
		request: req
	});
};

exports.applicantByID = function(req, res, next, id) {
	Resumee.findById(id).populate('user', 'email').exec(function(err, resumee) {
		if (err) return next(err);
		if (!resumee) return next(new Error('Failed to load resumee ' + id));
		req.resumee = resumee;
		next();
	});
};