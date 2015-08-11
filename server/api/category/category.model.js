'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CategorySchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  /*A unique identifier generally used as part of a URL.*/
  slug: {
    type: String,
    required: true,
    unique: true
  },
  /*Choices available are 0 (Draft), 1 (Live).*/
  status: {
    type: Object,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Category', CategorySchema);
