const mongoose = require('mongoose');
let URI = 'mongodb+srv://erick:0192837465_aBc@treinta-co.vz9gxfo.mongodb.net/data?retryWrites=true&w=majority';


mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(error => console.error(error));


module.exports = mongoose;
