/* globals describe it */

var express = require('express');
var app = express();
var expect = require('chai').expect;
var request = require('supertest');
var Promise = require('bluebird');

var dataSavedJob;

var db = {
    findJobs: function () {
        return new Promise(function (resolve, reject) {
            resolve(['i', 'am', 'an', 'array']);
        });
    },
    saveJob: function (job) {
        dataSavedJob = job;
    }
};

require('../../jobs-service')(db, app);

describe('Get Jobs', function () {
    it('should return a json list of jobs', function (done) {
        request(app).get('/api/jobs')
        .expect('Content-Type', /json/)
        .end(function (err, res) {
            expect(res.body).to.be.a('Array');
            done();
        });
    });
});

describe('Save Jobs', function () {
    it('should validate that the title is greater than 4 characters');
    it('should validate that the title is less than 40 characters');
    it('should validate that the description is greater than 4 characters');
    it('should validate that the descriptions is less than 250 characters');

    it('should pass the job to the database save', function (done) {
        var newJob = {title: 'Cook', description: 'You will be making bagels'};

        request(app).post('/api/jobs').send(newJob).end(function (err, res) {
            if (err) { console.log(err); }
            expect(dataSavedJob).to.deep.equal(newJob);
            done();
        });
    });

    it('should return a status of 200 to the front end if the database saved');
    it('should return a job with an id');
    it('should return an error if the database failed');
});