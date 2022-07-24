var {Schema} = require('mongoose');
var mongoose = require('mongoose');
let diagnosisModel = require('./diagnosis.model')
let vitalsModel = require('./vitals.model')
let doctorModel = require('./doctor.model')
let metaModel = require('./meta.model')

var userSchema = new Schema({
    id: {
        type: Number
    },
    timestamp: {
        type: Number
    },
    diagnosis: {
        type: Schema.Types.ObjectId,
        ref: diagnosisModel
    },
    vitals: {
        type: Schema.Types.ObjectId,
        ref: vitalsModel
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: doctorModel
    },
    userId: {
        type: Number
    },
    userName: {
        type: String
    },
    userDob: {
        type: String
    },
    meta: {
        type: Schema.Types.ObjectId,
        ref: metaModel
    },


});

module.exports = mongoose.model('user', userSchema, 'user');
