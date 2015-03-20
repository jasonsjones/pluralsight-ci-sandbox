var express = require('express');
var mongoose = require('mongoose');

var jobModel = require('./models/Job');

var app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function (req, res) {
    mongoose.model('Job').find({}).exec(function (err, jobs) {
        if (err) {
            res.send(err);
        }
        res.json(jobs);
    });
});
app.get('*', function (req, res) {
    res.render('index');
});

// mongoose.connect('mongodb://localhost/ci-sandbox');
mongoose.connect('mongodb://jobfinder:jobfinder@ds053698.mongolab.com:53698/jobfinder');

var connection = mongoose.connection;
connection.once('open', function () {
    console.log('successfully connected to mongodb...');
    jobModel.seedJobs();
});

app.listen(process.env.PORT, process.env.IP);