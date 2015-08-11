'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  objectid = Schema.Types.ObjectId;

var ProductSchema = new Schema({
  brand: objectid,
  category: [objectid],
  catalog_only: {},
  collection_group: {},
  description: {
    type: String,
    required: true
  },
  depth: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  pricing: {},
  requires_shipping: {},
  sku: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  sale_price: {
    type: Number,
    required: true
  },
  status: {},
  stock_level: {
    type: Number,
    required: true
  },
  stock_status: {},
  tax_band: {},
  weight: {
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Product', ProductSchema);
