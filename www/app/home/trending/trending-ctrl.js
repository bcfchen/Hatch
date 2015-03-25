(function(){
    "use strict";
    angular.module("app.home").controller("TrendingCtrl", ["$scope", "$state", "hatchApi", "$ionicPopup", TrendingCtrl]);
    function TrendingCtrl($scope, $state, hatchApi, $ionicPopup){
        var vm = this;
        var ideas = hatchApi.getIdeas();
        var ideasSize = ideas.length;
        var ideasMidPoint = Math.ceil(ideasSize/2);
        vm.ideasColumns=[ideas.slice(0, ideasMidPoint), ideas.slice(ideasMidPoint, ideasSize+1)];
        vm.ideas = hatchApi.getIdeas();
        vm.toAlerts = function(){
            $state.go("tab.alerts");
        };

        vm.like = function(idea) {
            idea.likes++;
        }

        vm.toComments = function(){
            $state.go("tab.comments");
        };

        vm.toIdea = function(idea){
            var ideaId = idea.id;
            var params = {
                "id": ideaId
            };
            $state.go("tab.idea", params);
        };

        vm.onSwipeLeft = function(){
            $state.go("tab.profile");
        };

        vm.onSwipeRight = function(){
            $state.go("tab.alerts");
        };

        vm.showPopup = function() {
           $scope.data = {}
           // An elaborate, custom popup
           var myPopup = $ionicPopup.show({
             template: '<div style="display:inline-block;position:relative;"><textarea name="textarea" ng-model="data.comment" style="width:185px;height:100px;"></textarea><button class="button " style="position:absolute;bottom:50px;right:-53px;"><i class="icon ion-camera icon-accessory"></i></button></div>',
             title: "Post your idea!",
             subTitle: "Share the awesomeness",
             scope: $scope,
             buttons: [
               { text: "Cancel" },
               {
                 text: "<b>Save</b>",
                 type: "button-positive",
                 onTap: function(e) {
                   if (!$scope.data.comment) {
                     //don't allow the user to save unless he enters comment
                     e.preventDefault();
                   } else {
                     return $scope.data.comment;
                   }
                 }
               },
             ]
           });
           myPopup.then(function(res) {
             console.log("Tapped!", res);
           });
          };
    };

})();