(function () {

  angular
    .module('app.predictions', [
      'app.predictions.controllers',
      'app.predictions.directives',
      'app.predictions.services'
    ]);

  angular
    .module('app.predictions.controllers', []);

  angular
    .module('app.predictions.directives', ['ngDialog']);

  angular
    .module('app.predictions.services', []);
})();
