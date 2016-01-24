(function(){
  angular.module('app')

    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {

      $routeProvider

      .when('/', {
        controller: 'PredictionsController',
        templateUrl: '/static/templates/home.html'

      });

  }


  $routeProvider.otherwise('/');

})();


