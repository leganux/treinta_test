var {Schema} = require('mongoose');
var mongoose = require('mongoose');


var vitalsSchema = new Schema({
    bloodPressureDiastole: {
        type: Number
    },
    bloodPressureSystole: {
        type: String
    },
    pulse: {
        type: Number
    },
    breathingRate: {
        type: Number
    },
    bodyTemperature: {
        type: Number
    }

});

module.exports = mongoose.model('vitals', vitalsSchema, 'vitals');
