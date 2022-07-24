var {Schema} = require('mongoose');
var mongoose = require('mongoose');


var diagnosisSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    severity: {
        type: Number
    }


});

module.exports = mongoose.model('diagnosis', diagnosisSchema, 'diagnosis');
