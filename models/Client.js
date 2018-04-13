var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ClientSchema = {

  contactName: {
    type: String,
    trim: true,
    required: 'FName required'
  },
  cEmail: {
    type: String,
    trim: true,
    required: 'LName required'
  },
  cPhone: {
    type: Number,
    trim: true
  },
  source: {
    type: String,
    trim: true
    // required: 'Mobile required'
  },  
  companyName: {
    type: String,
    trim: true
  },
  industry: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  }, 
  city: {
    type: String,
    trim: true
  },  
  district: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  currentAddress: {
    type: String,
    trim: true
  },
  agreementsAtt: {
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

var Client = mongoose.model('Client', ClientSchema, 'clients');
module.exports = Client;
