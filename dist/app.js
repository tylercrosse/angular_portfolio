/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function () {

	  angular
	    .module('app', [
	      // Shared modules
	      'ui.router',
	      'hc.marked',

	      // Feature areas
	      'app.projects',
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

	var blog = __webpack_require__(1);
	blog.keys().forEach(blog);

	var projects = __webpack_require__(4);
	projects.keys().forEach(projects);

	var staticPages = __webpack_require__(7);
	staticPages.keys().forEach(staticPages);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./blog.module.js": 2,
		"./index.controller.js": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	(function() {
	  angular
	    .module('app.blog', [])
	})();


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	(function() {
	  angular
	    .module('app.blog')
	    .controller('BlogIndexCtlr', BlogIndexCtlrFunc);

	  function BlogIndexCtlrFunc() {
	    var blogInVm = this;

	  }

	})();


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./aprojects.module.js": 5,
		"./index.controller.js": 6
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 4;


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	(function() {
	  angular
	    .module('app.projects', [])
	})();


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	(function() {
	  angular
	    .module('app.projects')
	    .controller('ProjIndexCtlr', ProjIndexCtlrFunc);

	  function ProjIndexCtlrFunc() {
	    var projInVm = this;

	  }

	})();


/***/ },
/* 7 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 7;


/***/ }
/******/ ]);