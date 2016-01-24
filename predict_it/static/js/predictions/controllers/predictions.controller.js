(function () {
    angular
        .module('app.predictions.controllers')
        .controller('PredictionsController', PredictionsController);

    PredictionsController.$inject = ['$scope'];

    function PredictionsController($scope) {


        activate();


        function activate() {
            $scope.$watchCollection(function () { return $scope.predictions; });
            // $scope.$watch(function () { return $(window).width(); }, render);
        }

        // function render(current, original) {
        //     if (current !== original) {
        //         PredictionsController.columns = [];

        //         for (var i = 0; i < calculateNumberOfColumns(); ++i) {
        //             PredictionsController.columns.push([]);
        //         }

        //         for (var i = 0; i < current.length; ++i) {
        //             var column = approximateShortestColumn();

        //             PredictionsController.columns[column].push(current[i]);
        //         }
        //     }
        // }
    }
})();
