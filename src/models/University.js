const { Schema, model } = require('mongoose');

const universitySchema = new Schema({
   name: {
      type:String,
      required:true
   },
   country: {
      type:String,
      required:true
   },
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

universitySchema.index({name: 1, country: 1, 'state-province': 1}, { unique : true})
module.exports = model('University', universitySchema);