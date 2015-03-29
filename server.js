var express = require('express');
var mongoose = require('mongoose');

var jobModel = require('./models/Job');
var jobsData = require('./jobs-data');

var app = express();

require('./jobs-service')(jobsData, app);

app.set('views', __dirname);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    res.render('index');
});

// mongoose.connect('mongodb://localhost/ci-sandbox');
jobsData.connectDB('mongodb://jobfinder:jobfinder@ds053698.mongolab.com:53698/jobfinder')
.then(function () {
    console.log('successfully connected to mongodb...');
    jobsData.seedJobs();
});


app.listen(process.env.PORT, process.env.IP);