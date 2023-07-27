// app.js
(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.checked = false;
        $scope.empty = false; // Initialize the 'empty' variable to false

        $scope.checkLunch = function() {
            $scope.empty = false; // Reset 'empty' to false on each check

            if ($scope.dishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                var arrayDishes = $scope.dishes.split(',');
                var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
                    return v.trim() !== '';
                });

                if (arrayDishesWithoutEmptys.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();
