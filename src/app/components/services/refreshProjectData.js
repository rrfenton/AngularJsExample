'use strict';
var app = angular.module('angularJsExample');

app.service('refreshProjectData', function($http, projectData)
{
  return {
    refreshSampleLines : function(id) {
    
    if (id !== 'No project selected'){
      $http.get('http://localhost:3000/SampleLines/'+id)
        .success(function(data) {
          projectData.setProjectData(data);
        })
        .error(function() {
          // log error
        });
      }
    }
  };
});