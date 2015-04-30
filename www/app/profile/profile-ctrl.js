(function() {
    "use strict";
    angular.module("app.profile").controller("ProfileCtrl", ["$state", "hatchApi", "$localstorage", ProfileCtrl]);

    function ProfileCtrl($state, hatchApi, $localstorage) {
        var vm = this;
        vm.ideasColumns = [];
        vm.user = $localstorage.getUser();
        vm.user.image = "https://graph.facebook.com/" + vm.user.facebookId + "/picture?type=large&width=500&height=500";
        var ideas = hatchApi.getIdeas();
        loadIdeaColumns();
        ideas.$watch(function(event) {
            console.log("add idea event!");
            console.log(ideas.length);
            loadIdeaColumns();
        });

        function loadIdeaColumns(){
            var ideasSize = ideas.length;
            var ideasMidPoint = Math.ceil(ideasSize / 2);
            vm.ideasColumns = [ideas.slice(0, ideasMidPoint), ideas.slice(ideasMidPoint, ideasSize + 1)];
        }

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