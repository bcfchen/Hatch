(function() {
    'use strict';
    angular.module('app.home').controller('NewCtrl', ['$scope', '$state', 'hatchApi', '$ionicPopup', NewCtrl]);

    function NewCtrl($scope, $state, hatchApi, $ionicPopup) {
        var vm = this;
        var ideas = hatchApi.getIdeas();
        var ideasSize = ideas.length;
        var ideasMidPoint = Math.ceil(ideasSize / 2);
        vm.ideas = hatchApi.getIdeas();

        vm.cards = [];

        $scope.addCard = function(i) {
            var newCard = vm.ideas[i];
            newCard.id = vm.ideas[i].id;
            vm.cards.push(angular.extend({}, newCard));
        }

        for (var i = 0; i < vm.ideas.length; i++) $scope.addCard(i);

        $scope.cardSwipedLeft = function(index) {
            console.log('Left swipe');
        }

        $scope.cardSwipedRight = function(inputIdea) {
            var swipedIdea = _.find(vm.ideas, function(idea) {
                return idea.id == inputIdea.id;
            });

            swipedIdea.likes += 1;
        }

        $scope.cardDestroyed = function(index) {
            vm.cards.splice(index, 1);
            console.log('Card removed');
        }

        vm.toAlerts = function() {
            $state.go("tab.alerts");
        };

        vm.toComments = function() {
            $state.go("tab.comments");
        };

        vm.toIdea = function() {
            $state.go("tab.idea");
        };

        vm.showPopup = function() {
            $scope.data = {}
            var myPopup = $ionicPopup.show({
                template: '<div style="display:inline-block;position:relative;"><textarea name="textarea" ng-model="data.comment" style="width:185px;height:100px;"></textarea><button class="button " style="position:absolute;bottom:50px;right:-53px;"><i class="icon ion-camera icon-accessory"></i></button></div>',
                title: 'Post your idea!',
                subTitle: 'Share the awesomeness',
                scope: $scope,
                buttons: [{
                    text: 'Cancel'
                }, {
                    text: '<b>Save</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.comment) {
                            //don't allow the user to save unless enters comment
                            e.preventDefault();
                        } else {
                            return $scope.data.comment;
                        }
                    }
                }, ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });
        };
    };

})();