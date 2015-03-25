(function() {
    "use strict";
    angular.module("app.profile").controller("ProfileCtrl", ["$state", "hatchApi", ProfileCtrl]);

    function ProfileCtrl($state, hatchApi) {
        var vm = this;
        vm.profile = hatchApi.getProfile();
        var ideas = hatchApi.getMyIdeas();
        var ideasSize = ideas.length;
        var ideasMidPoint = Math.ceil(ideasSize / 2);
        vm.ideasColumns = [ideas.slice(0, ideasMidPoint), ideas.slice(ideasMidPoint, ideasSize + 1)];

        vm.like = function(idea) {
            idea.likes++;
        }

        vm.toIdea = function(idea) {
            var ideaId = idea.id;
            var params = {
                "id": ideaId
            };
            $state.go("tab.idea", params);
        };

        vm.onSwipeRight = function() {
            $state.go("home.trending");
        };
    };

})();