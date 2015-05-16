'use strict';

var app = angular.module('angularJsExample');

//todo: rip these controllers out as their own modules / files

app.controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log, selectedProject) {
  $scope.toggleLeft = buildToggler('left');
  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */

   
  function buildToggler(navID) {
    var debounceFn =  $mdUtil.debounce(function(){
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              $log.debug('toggle ' + navID + ' is done');
            });
        },300);
    return debounceFn;
  }
});

app.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, selectedProject) {
  $scope.close = function () {
    $mdSidenav('left').close()
      .then(function () {
        $log.debug('close LEFT is done');
      });
  };
  
  //todo: have gulp / deployment inject correct url here
  
  $scope.projects = [
    { name: 'Regression', wanted: true },
    { name: 'Sheriff', wanted: false },
    { name: 'Pipes', wanted: true },
    { name: 'Sam is a ah who cares', wanted: false }
  ];
  
  $scope.selectedProject = selectedProject.getProject(); 
  
});

app.controller('MainView', function ($scope, selectedProject)
{
    $scope.selectedProject = selectedProject.getProject();
});

app.service('selectedProject', function () {
    var project = {
      Id: 'No project selected'
    };

    return {
        getProject: function () {
            return project;
        },
        setProjectId: function(value) {
            project = value;
        }
    };
});
 
