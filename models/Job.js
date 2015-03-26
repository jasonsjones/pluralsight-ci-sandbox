var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    title: {type: String},
    description: {type: String}
});

exports.module = mongoose.model('Job', jobSchema);
