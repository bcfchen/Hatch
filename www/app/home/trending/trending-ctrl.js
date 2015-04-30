(function(){
    "use strict";
    angular.module("app.home").controller("TrendingCtrl", ["$scope", "$state", "hatchApi", "$ionicPopup", "$firebase", "$cordovaCamera", "$localstorage", TrendingCtrl]);
    function TrendingCtrl($scope, $state, hatchApi, $ionicPopup, $firebase, $cordovaCamera, $localstorage){
        var vm = this,
            newIdea = {};
        vm.ideas = [];

        //vm.ideas = hatchApi.getIdeas();
        // vm.ideasColumns=[ideas.slice(0, ideasMidPoint), ideas.slice(ideasMidPoint, ideasSize+1)];

        var usersRef = hatchApi.getUsers();
        vm.ideas = hatchApi.getIdeas();
        vm.ideas.$loaded(function(ideasList){
          // _.each(ideasList, function(idea){
          //   console.log("idea author: " + idea.author);
          //   var authorObj = hatchApi.getUser(idea.author);
          //   idea.author = authorObj;
          // });
        });

        vm.toAlerts = function(){
            $state.go("tab.alerts");
        };

        vm.like = function(idea, index) {
            vm.ideas[index].likes++;
            vm.ideas.$save(index).then(function(){
              console.log("likes updated to: " + vm.ideas[index].likes);
            });
        }

        vm.toComments = function(){
            $state.go("tab.comments");
        };

        vm.toIdea = function(idea){
            var ideaId = idea.$id;
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

        vm.takePicture = function() {
                var options = {
                    quality : 75,
                    destinationType : Camera.DestinationType.DATA_URL,
                    sourceType : Camera.PictureSourceType.CAMERA,
                    allowEdit : true,
                    encodingType: Camera.EncodingType.JPEG,
                    popoverOptions: CameraPopoverOptions,
                    targetWidth: 500,
                    targetHeight: 200,
                    saveToPhotoAlbum: false
                };
                $cordovaCamera.getPicture(options).then(function(imageData) {
                  newIdea.image = imageData;
                }, function(error) {
                    console.error(error);
                });
            }

        /* add idea to database */
        var addIdea = function(idea){
          var newIdea = {
                      image: idea.image,
                      author: $localstorage.getUser(),
                      name: idea.description,
                      likes: 0
                    };

          vm.ideas.$add(newIdea).then(function(addedIdea) {
              console.log("IDea added!");
                      // var user = hatchApi.getUser(tempUser);
                      //    vm.ideas.$getRecord(addedIdea.key()).author = user;
                    });
        }


        vm.showPopup = function() {
           $scope.data = {}
           // An elaborate, custom popup
           var myPopup = $ionicPopup.show({
             template: '<div style="display:inline-block;position:relative;"><textarea name="textarea" ng-model="data.comment" style="width:185px;height:100px;"></textarea><button class="button" ng-click="vm.takePicture()" style="position:absolute;bottom:50px;right:-53px;"><i class="icon ion-camera icon-accessory"></i></button></div>',
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
                      newIdea.description = $scope.data.comment;
                      addIdea(newIdea);
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