var {Schema} = require('mongoose');
var mongoose = require('mongoose');


var metaSchema = new Schema({

    height: {
        type: Number
    },
    weight: {
        type: String
    }
});

module.exports = mongoose.model('meta', metaSchema, 'meta');
