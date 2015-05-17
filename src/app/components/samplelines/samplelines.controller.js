'use strict';
var app = angular.module('angularJsExample');

app.controller('SampleLineCtrl', function ($scope, $http, selectedSampleLine, projectData)
{
    $scope.selectedSample = selectedSampleLine.getSampleLine;  
    $scope.projectData = projectData.getProjectData;
});

app.service('projectData', function() {
  var sampleLines = {
    SampleLines: 'No Project Selected'
  };
  
  return {   
    getProjectData : function() {
      return sampleLines;
    },
    
    setProjectData : function(value)
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
        },
        
        setSampleLine: function(value) {
          sampleLine = value;
        }
    };
});