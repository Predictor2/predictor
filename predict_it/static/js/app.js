(function(){
  var app = angular.module('predictor', ['ui.bootstrap', 'ngCookies', 'ngRoute']);

    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
    
    app.run(function ($http, $cookies) {
      $http.defaults.headers.common['X-CSRFToken'] = $cookies.csrftoken;
    });

    app.config(function($routeProvider, $locationProvider){

      $routeProvider

      .when('/', {
        templateUrl: 'templates/account/login.html'
        // controller: 'AuthController'
      })

      .when('/login', {
        templateUrl: 'templates/account/login.html'
        // controller: 'AuthController'
      })

      .when('/signup', {
        templateUrl: 'templates/account/signup.html'
        // controller: 'AuthController'
      })

      .when('/logout', {
        templateUrl: 'templates/account/logout.html'
        // controller: 'AuthController'
      })

      .when('/home', {
        templateUrl: 'templates/pages/home.html',
        controller: 'MainController',
        resolve: {
                    posts: function (PostService) {
                      return PostService.list();
                    }
                  }
      })
      
      .when("/post/:id", {
        templateUrl: "templates/pages/home.html",
        controller: "MainController",
        resolve: {
                    post: function ($route, PostService) {
                      var postId = $route.current.params.id;
                      return PostService.get(postId);
                    }
                  }
        })

      .when('/about', {
        templateUrl: 'templates/pages/about.html',
        controller: 'MainController'
      });

    });

    $locationProvider.html5Mode(true);
    $routeProvider.otherwise('/login');

})();


