(function () {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'ngResource',
      'hc.marked'
    ])
    .config([
      '$stateProvider',
      RouterFunction
    ])
    .config([
      'markedProvider', function (markedProvider) {
      markedProvider.setOptions({
        gfm: true,
        tables: true,
        highlight: function (code, lang) {
          if (lang) {
            return hljs.highlight(lang, code, true).value;
          } else {
            return hljs.highlightAuto(code).value;
          }
        }
      });
    }]);

  function RouterFunction($stateProvider) {
    $stateProvider
    .state('root', {
      url: '/',
      templateUrl: 'js/root.html',
      controller: 'RootController',
      controllerAs: 'RootViewModel'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'js/profile.html',
      controller: 'ProfileController',
      controllerAs: 'ProfileViewModel'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'js/projects.html',
      controller: 'ProjectsController',
      controllerAs: 'ProjectsViewModel'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'js/blogIndex.html',
      controller: 'BlogController',
      controllerAs: 'BlogViewModel'
    })
    .state('blog.article', {
      url: '/blog/:articleId',
      template: '<div><h1>Welcome to your inbox</h1>\
               <a ui-sref="blog.priority">Show priority</a>\
               <div ui-view></div>\
               </div>',
       controller: function($scope, $stateParams) {
         $scope.postId = $stateParams.postId;
       }
    });
  }

})();
