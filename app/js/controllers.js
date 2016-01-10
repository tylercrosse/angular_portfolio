(function () {
  'use strict';

  // angular
  // .module('app')
  // .controller('ProfileController', function () {});

  var portfolioControllers = angular.module('app');

  portfolioControllers.controller('RootController', function () {});

  portfolioControllers.controller('ProfileController', function () {});

  portfolioControllers.controller('ProjectsController', function () {});

  portfolioControllers.controller('BlogController', function ($scope) {
    this.isVisible = false;
    this.toggleEl = function () {
      console.log("toggled");
      if (this.isVisible) {
        this.isVisible = false;
      }
      else {
        this.isVisible = true;
      }
    };
    $scope.posts = [
      'post1',
      'post2'
    ];
  });

} ());
