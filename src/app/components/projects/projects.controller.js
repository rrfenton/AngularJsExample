'use strict';
var app = angular.module('angularJsExample');

app.controller('ProjectsCtrl', function ($scope, $http, selectedProject, refreshProjectData) {
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