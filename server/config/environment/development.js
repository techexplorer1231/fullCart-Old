'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/fullcart-dev'
    /*uri: 'mongodb://cart:cart@ds051738.mongolab.com:51738/cart'*/
  },

  seedDB: true
};
