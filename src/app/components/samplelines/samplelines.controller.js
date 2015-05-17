'use strict';
var app = angular.module('angularJsExample');

app.controller('SampleLineCtrl', function ($scope, $http, selectedSampleLine, projectData)
{
    $scope.selectedSample = selectedSampleLine.getSampleLine;  
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

app.service('selectedSampleLine', function () {
    var sampleLine = {
      data: 'No sample selected',
    };

    return {
        getSampleLine: function () {
            return sampleLine;
        }
    };
});