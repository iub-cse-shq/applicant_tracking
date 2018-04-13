var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var JobOpeningSchema = {

  title: {
    type: String,
    trim: true,
    required: 'title required'
  },
  companyName: {
    type: String,
    trim: true,
    required: 'companyName required'
  },
  assignedRec: {
    type: Number,
    trim: true
  },  
  industry: {
    type: Number,
    trim: true
  }, 
  jobType: {
    type: Number,
    trim: true
  }, 
  salary: {
    type: Number,
    trim: true
  }, 
  workExp: {
    type: Number,
    trim: true
  },
  city: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  district: {
    type: String,
    trim: true
  },
  numOfVac: {
    type: String,
    trim: true
  },
  dateOpen: {
    type: String,
    trim: true
  }, 
  dateTarget: {
    type: String,
    trim: true
  }, 
  JobDes: {
    type: String,
    trim: true
  },
  JobDesAtt: {
    type: String,
    trim: true
  },  
  othersAtt: {
    type: String,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
  
}

var JobOpening = mongoose.model('JobOpening', JobOpeningSchema, 'jobOpenings');
module.exports = JobOpening;
