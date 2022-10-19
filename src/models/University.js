const { Schema, model } = require('mongoose');

const universitySchema = new Schema({
   name: {
      type:String,
   },
   country: String,
   'state-province': {
      type: String,
      default : null
   },
   web_pages: [{
      type: String,
   }],
   alpha_two_code: String,
   domains: [{
    type: String,
   }]
});

module.exports = model('University', universitySchema);