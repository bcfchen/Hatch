(function(){
	angular.module("app.idea").controller("IdeaCtrl", ["$scope", "$stateParams","$state", "hatchApi", "$ionicPopup" ,IdeaCtrl]);
	function IdeaCtrl($scope, $stateParams, $state, hatchApi, $ionicPopup){
		var vm = this;
		var ideaId = $stateParams.id;

		vm.idea = hatchApi.getIdea(ideaId);
		vm.home = function(){
			alert('hi');
		}
		refreshComments();

		vm.like = function(){
			vm.idea.likes ++;
		}

		function refreshComments(){
			vm.comments = hatchApi.getComments(ideaId);
		}

		vm.showPopup = function() {
		   $scope.data = {}
		   // An elaborate, custom popup
		   var myPopup = $ionicPopup.show({
		     template: '<textarea name="commentArea" ng-model="data.comment" style="width:400px;height:100px;"></textarea>',
		     title: "Comment",
		     subTitle: "Please be nice! :)",
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
		   myPopup.then(function(text) {
		   	if (!text){
		   	return false;
		   }
		   		var newComment =  {
		   			"name": currentUser.name,
		   			"ideaId": ideaId,
		   			"idea": vm.idea.idea,
		   			"comment": text
		   		};
		     	hatchApi.addComment(newComment);
		     	refreshComments();
		   });
		  };
	};

})();