const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    event_title:{
        type:String
    },
    event_date:{
        type:Date
    },
    event_location:{
        type:String
    },
    event_description:{
        type:String
    },
    event_organizer:{
        type:String
    },
    volunteers_needed:{
        type:Number
    }

})
const eventData = mongoose.model('eventData', userSchema)


module.exports = eventData