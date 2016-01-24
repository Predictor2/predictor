(function () {

  angular
    .module('app.predictions.services')
    .factory('Predictions', Predictions);

  Predictions.$inject = ['$http'];

  function Predictions($http) {
    var Predictions = {
      all: all,
    };

    return Predictions;

    function all() {
      return $http.get('/api/predictions/');
    }
  }
})();
