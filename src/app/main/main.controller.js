'use strict';

var app = angular.module('angularJsExample');

//todo: rip these controllers out as their own modules / files

app.controller('MainCtrl', function ($scope, selectedSampleLine) {
	$scope.selectedSample = selectedSampleLine.getSampleLine;
});