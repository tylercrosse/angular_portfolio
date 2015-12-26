(function () {
  'use strict';

  angular
  .module('portfolio', [
    'ui.router',
    'ngResource',
    'portfolioControllers'
  ])
  .config([
    '$stateProvider',
    RouterFunction
  ]);

  function RouterFunction($stateProvider) {
    $stateProvider
    .state('root', {
      url: '/',
      templateUrl: 'js/root.html'
      // controller: 'RootController',
      // controllerAs: 'RootViewModel'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'js/profile.html'
      // controller: 'ProfileController',
      // controllerAs: 'ProfileViewModel'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'js/projects.html'
      // controller: 'ProjectsController',
      // controllerAs: 'ProjectsViewModel'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'js/blog.html'
      // controller: 'BlogController',
      // controllerAs: 'BlogViewModel'
    });
  }

})();
