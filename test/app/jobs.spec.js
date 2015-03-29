describe('Posting Jobs', function () {

    var postRequestData;
    var newJob = {title: 'test title', description: 'test description'};

    beforeEach(module('app'));

    it('should call /api/jobs with job data', inject(function ($httpBackend, jobs) {
        $httpBackend.when('POST', '/api/jobs', function (data) {
            postRequestData = JSON.parse(data);
            expect(postRequestData).to.not.be.empty;
            return true;
        }).respond(200);
        jobs.save(newJob);
        $httpBackend.flush();
    }));
});