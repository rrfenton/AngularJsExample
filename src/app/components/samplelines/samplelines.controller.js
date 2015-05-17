'use strict';
var app = angular.module('angularJsExample');

app.controller('SampleLineCtrl', function ($scope, $http, selectedProject, projectData)
{
    $scope.sampleLineData = projectData.getSampleLines;
});

app.service('projectData', function() {
  var sampleLines = {
    SampleLines: 'No Project Selected'
  };
  
  return {   
    getSampleLines : function() {
      return sampleLines;
    },
    
    setSampleLines : function(value)
    {
      sampleLines = value;
    }
  };
});