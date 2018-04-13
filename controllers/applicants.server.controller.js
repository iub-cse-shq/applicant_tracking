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

module.exports.ApplicantDashboard = function(req, res) {
     
    res.render('./../public/views/applicant/ApplicantDashboard.ejs', {
    // res.render('./../public/views/recruiter/dashboard.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.MyProfile = function(req, res) {
	var ObjectId = require('mongoose').Types.ObjectId; // load the Mongoose ObjectId function 
	Resumee.findOne({user: ObjectId(req.user._id)}).exec(function(err, resumee) {
		if (err) console.error(err);
		if (!resumee) req.resumee = false;
		req.resumee = resumee;
		res.render('./../public/views/applicant/MyProfile.ejs', {
			user: req.user || null, 
			request: req
		});
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
	var ObjectId = require('mongoose').Types.ObjectId; // load the Mongoose ObjectId function 
	 // Mongoose query find and return one object.
	Resumee.findOne({user: ObjectId(req.user._id)}).exec(function(err, resumee) {
		if (err) console.error(err);
		if (!resumee) return console.error(new Error('Failed to load resumee of user' + req.user._id));
		req.resumee = resumee;
		console.log(resumee);
		
		res.render('./../public/views/applicant/ViewMyResume.ejs', {
			user: req.user || null, 
			request: req
		});
	});
	
    
};
module.exports.CreateMyResume = function(req, res) {
     
    res.render('./../public/views/applicant/CreateMyResume.ejs', {
		user: req.user || null, 
		request: req
	});
};
module.exports.EditMyResume = function(req, res) {
	var ObjectId = require('mongoose').Types.ObjectId; // load the Mongoose ObjectId function 
	Resumee.findOne({user: ObjectId(req.user._id)}).exec(function(err, resumee) {
		if (err) console.error(err);
		if (!resumee) return console.error(new Error('Failed to load resumee of user' + req.user._id));
		req.resumee = resumee;
		
		res.render('./../public/views/applicant/EditMyResume.ejs', {
			user: req.user || null, 
			request: req
		});
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