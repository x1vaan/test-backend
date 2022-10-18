const { Schema, model } = require('mongoose');

const universitySchema = new Schema({
   name: String,
   country: String,
   state_province: {
      type: String,
      default : null
   },
   web_pages: String,
   alpha_two_code: String,
   domains: [{
    type: String
   }]
});

module.exports = model('University', universitySchema);