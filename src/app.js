'use strict';

(function () {

  angular
    .module('app', [
      // Shared modules
      'ui.router',
      'hc.marked',

      // Feature areas
      // 'app.projects',
      'app.blog'
    ])
    .config([
      '$stateProvider',
      RouterFunc
    ])
    .config([
      'markedProvider',
       Markedfunc
     ]);

  function RouterFunc($stateProvider) {
    $stateProvider
    .state('root', {
      url: '/',
      templateUrl: '../src/staticPages/root.html'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '../src/staticPages/profile.html',
    })
    .state('projects', {
      url: '/projects',
      templateUrl: '../src/projects/projIndex.html',
      controller: 'ProjIndexCtlr',
      controllerAs: 'projInVM'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: '../src/blog/blogIndex.html',
      controller: 'BlogIndexCtlr',
      controllerAs: 'blogInVm'
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

  function Markedfunc(markedProvider) {
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
  }

})();

var blog = require.context('./blog', false, /.js$/);
blog.keys().forEach(blog);

var projects = require.context('./projects', false, /.js$/);
projects.keys().forEach(projects);

var staticPages = require.context('./staticPages', false, /.js$/);
staticPages.keys().forEach(staticPages);
