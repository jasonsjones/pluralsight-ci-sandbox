(function () {
    'use strict';
    angular.module('app', ['ngResource']).controller('testCtrl', function ($scope, $resource) {
        $scope.jobs = $resource('/api/jobs').query();
    });
}());