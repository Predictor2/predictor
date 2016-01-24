
var app = angular.module('predictor', [
  'ui.router'
]);

app.constant('BASE_URL', 'http://192.168.99.100:8000/api/predictions/');

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/static/templates/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('/');
});

app.controller('MainCtrl', function($scope, Predictions, $state){

  Predictions.all().then(function(res){
    $scope.Predictions = res.data;
  });
});

app.service('Predictions', function($http, BASE_URL){
  var Predictions = {};

  Predictions.all = function(){
    return $http.get(BASE_URL);
  };

  return Predictions;
});


