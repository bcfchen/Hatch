
angular.module('app.login').controller('LoginCtrl', ['$state', "$scope", "$localstorage", "hatchApi", "$timeout", LoginCtrl]);
	function LoginCtrl($state, $scope, $localstorage, hatchApi, $timeout){
		var vm = this;

		/* check if user exists. if so, redirect to conversation.
		   if not, then display login form */
		vm.user = $localstorage.getUser();
		vm.showLogin = false;

		/* wait for animation to load (10 sec), then
		 * go to trending page if user exists, or 
		 * show login button if not */
		$timeout(function () {
			if (vm.user){
		        $state.go('tab.home.trending');
			} else{
				vm.showLogin = true;
			}
		}, 9000);

		/* handle user login */
		vm.logIn = function(){
			hatchApi.loginWithFacebook().then(function(){
	            $state.go('tab.home.trending');
			});
		}
	};