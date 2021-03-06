'use strict';

/**
 * @ngdoc function
 * @name naddoddrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the naddoddrApp
 */

angular.module('naddoddrApp')
    .controller('AdventuresCtrl', ['$scope', 'naddoddrProvider', function ($scope, naddoddrProvider) {
        $scope.adventures = naddoddrProvider.Adventure.findAll();
        var geopoint = $scope.adventures[0].getGeopoints()[0];
        console.log(geopoint);
        angular.extend($scope,{
            defaults: {
                scrollWheelZoom: false
            }
        });


//        var todosInStore = localStorageService.get('todos');
//
//        $scope.todos = todosInStore && todosInStore.split('\n') || [];
//
//        $scope.$watch('todos', function () {
//            localStorageService.add('todos', $scope.todos.join('\n'));
//        }, true);
//
//        $scope.addTodo = function () {
//            $scope.todos.push($scope.todo);
//            $scope.todo = '';
//        };
//
//        $scope.removeTodo = function (index) {
//            $scope.todos.splice(index, 1);
//        };

    }]);
