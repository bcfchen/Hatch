(function() {
    'use strict';
    angular.module('app.alerts').controller('AlertsCtrl', ['$state', 'hatchApi', AlertsCtrl]);

    function AlertsCtrl($state, hatchApi) {

        var vm = this;
        vm.activities = hatchApi.getAllComments();

        vm.toIdea = function(idea) {
            var ideaId = idea.ideaId;
            var params = {
                'id': ideaId
            };
            $state.go("tab.idea", params);
        };

        vm.onSwipeLeft = function() {
            $state.go("home.trending");
        };

        vm.toHome = function() {
            console.log("here");
            $state.go("home.trending");
        };
    };

})();