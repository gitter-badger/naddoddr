'use strict';

/**
 * @ngdoc function
 * @name naddoddrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the naddoddrApp
 */

angular.module('naddoddrApp')
    .controller('AdventureEditCtrl', ['$scope', '$routeParams', 'naddoddrProvider', function ($scope, $routeParams, naddoddrProvider) {
        angular.extend($scope, {
            defaults: {
                scrollWheelZoom: false
            },
        });
        console.log($routeParams);
        $scope.adventure = naddoddrProvider.Adventure.findById($routeParams.adventureId);

        $scope.$watch('adventure', function() {
            console.log('Cambios');
            $scope.adventure.refresh();
            $scope.adventure.center.zoom-= 1;
        }, true);
    }]);
