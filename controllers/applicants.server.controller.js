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
  var resume = new Resume(req.body);
  resume.user = req.user;
  resume.save(function(err, data) {
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
  res.json(req.resume);
};


exports.delete = function(req, res) {
	var resume = req.resume;
	resume.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(resume);
		}
	});
};


module.exports.update = function(req, res) {
  var resume = req.resume;

  	resume = _.extend(resume, req.body);

  	resume.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(resume);
  		}
  	});
};
module.exports.singleView = function(req, res) {
     
        res.render('./../public/views/resume/view.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.showContent = function(req, res) {
     
    res.render('./../public/views/resume/showContent.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.createView = function(req, res) {
     
    res.render('./../public/views/resume/new.ejs', {
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
    
            res.render('./../public/views/resume/all.ejs', {
        		user: req.user || null,
        		request: req,
        		resumes: data
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
module.exports.MyProfile = function(req, res) {
     
    res.render('./../public/views/applicant/MyProfile.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.ApplicantEmail = function(req, res) {
     
    res.render('./../public/views/applicant/ApplicantEmail.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.ApplicantTest = function(req, res) {
     
    res.render('./../public/views/applicant/ApplicantTest.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.ApplicantCareerTips = function(req, res) {
     
    res.render('./../public/views/applicant/ApplicantCareerTips.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.ViewMyResume = function(req, res) {
     
    res.render('./../public/views/applicant/ViewMyResume.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.CreateMyResume = function(req, res) {
     
    res.render('./../public/views/applicant/CreateMyResume.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.EditMyResume = function(req, res) {
     
    res.render('./../public/views/applicant/EditMyResume.ejs', {
		user: req.user || null, 
		request: req
	});
};



exports.applicantByID = function(req, res, next, id) {
	Resume.findById(id).populate('user', 'email').exec(function(err, resume) {
		if (err) return next(err);
		if (!resume) return next(new Error('Failed to load resume ' + id));
		req.resume = resume;
		next();
	});
};





