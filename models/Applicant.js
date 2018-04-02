var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ApplicantSchema = {

  email: {
    type: String,
    trim: true,
    required: 'Email required'
  },
    passward: {
    type: String,
    trim: true,
    required: 'Passward required'
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

var Applicant = mongoose.model('Applicant', ApplicantSchema, 'applicants');
module.exports = Applicant;
