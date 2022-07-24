var {Schema} = require('mongoose');
var mongoose = require('mongoose');


var doctorSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('doctor', doctorSchema, 'doctor');
