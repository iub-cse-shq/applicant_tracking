var mongoose = require('mongoose');
var Resume = require('./../models/Resume.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');

module.exports.list = function(req, res) {
  Resume.find(function(err, data) {
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
  var Resume = new Resume(req.body);
  Resume.user = req.user;
  Resume.save(function(err, data) {
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
  res.json(req.Resume);
};


exports.delete = function(req, res) {
	var Resume = req.Resume;
	Resume.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(Resume);
		}
	});
};


module.exports.update = function(req, res) {
  var Resume = req.Resume;

  	Resume = _.extend(Resume, req.body);

  	Resume.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(Resume);
  		}
  	});
};
module.exports.singleView = function(req, res) {
     
    res.render('./../public/views/Resume/view.ejs', {
		user: req.user || null, //meaning ?  
		request: req
	});
};
module.exports.showContent = function(req, res) {
     
    res.render('./../public/views/Resume/showContent.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.createView = function(req, res) {
     
    res.render('./../public/views/Resume/new.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.listView = function(req, res) {
  Resume.find(function(err, data) {
        if (err) {
          return res.status(400).send({
    
      				message: errorHandler.getErrorMessage(err)
      			});
        } else {
          console.log("api called");
    
            res.render('./../public/views/Resume/all.ejs', {
        		user: req.user || null,
        		request: req,
        		Resumes: data
        	});
        }
  });
  
  	
};

module.exports.ApplicantDashboard = function(req, res) {
     
    res.render('./../public/views/applicant/ApplicantDashboard.ejs', {
		user: req.user || null, 
		request: req
	});
};

exports.ResumeByID = function(req, res, next, id) {
	Resume.findById(id).populate('user', 'email').exec(function(err, Resume) {
		if (err) return next(err);
		if (!Resume) return next(new Error('Failed to load Resume ' + id));
		req.Resume = Resume;
		next();
	});
};




