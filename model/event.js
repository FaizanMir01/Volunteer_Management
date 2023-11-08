const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  event_title: {
    type: String,
  },
  event_type:{
    type:String
  },
  event_email:{
    type: String
  },
  event_date: {
    type: Date,
  },
  event_location: {
    type: String,
  },
  event_description: {
    type: String,
  },
  event_organizer: {
    type: String,
  },
  volunteers_needed: {
    type: Number,
  },
  Group_Link:{
    type: String
  }
});

const eventData = mongoose.model('eventData', eventSchema);

module.exports = eventData;
