

(function () {
  'use strict';

  var portfolioControllers = angular.module('portfolioControllers', []);

  portfolioControllers.controller('RootController', [
    '$stateParams'
  ]);

  portfolioControllers.controller('ProfileController', [
    '$stateParams'
  ]);

  portfolioControllers.controller('ProjectsController', [
    '$stateParams'
  ]);

  portfolioControllers.controller('BlogController', [
    '$stateParams'
  ]);

} ());
