'use strict';

var app = angular.module('angularJsExample');

//todo: rip these controllers out as their own modules / files

app.controller('MainCtrl', function () {
});

app.controller('LeftCtrl', function ($scope, $http, selectedProject, refreshProjectData) {
  //todo: have gulp / deployment inject correct url here
  
    $http.get('http://localhost:3000/projects').
    success(function(data) {
      $scope.projects = data;
    }).
    error(function() {
      // log error
    });
  
  $scope.selectedProject = selectedProject.getProject();
  $scope.changeProject = function(id) {
    refreshProjectData.refreshSampleLines(id);
  };
  
});

app.controller('MainView', function ($scope, $http, selectedProject, projectData)
{
    $scope.sampleLineData = projectData.getSampleLines;
});

app.service('selectedProject', function () {
    var project = {
      Id: 'No project selected'
    };

    return {
        getProject: function () {
            return project;
        }
    };
});

app.service('refreshProjectData', function($http, projectData)
{
  return {
    refreshSampleLines : function(id) {
    
    if (id !== 'No project selected'){
      $http.get('http://localhost:3000/SampleLines/'+id)
        .success(function(data) {
          projectData.setSampleLines(data);
        })
        .error(function() {
          // log error
        });
      }
    }
  };
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
      console.log(sampleLines);
    }
  };
});
 
