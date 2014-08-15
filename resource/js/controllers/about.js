'use strict';

angular.module('myControllers').controller('CommentsCtrl', function($scope, $http) {
	$scope.next_id = 0;
	$scope.list = [];
	
	$scope.loadComments = function() {
		var url = _GLOBAL.api + '/getComments/id/' + $scope.next_id;
		$http.get(url).success(function(ret) {
			var data = ret.data;
			if (data != null) {
				$scope.list.push.apply($scope.list, data);
				$scope.next_id = data[data.length - 1].id;
			} else {
				$scope.hasMoreData = false;
			}
		});
	}
	
	$scope.loadMore = function() {
		$scope.loadComments();
	}
	$scope.hasMoreData = true;
	$scope.moreDataCanBeLoaded = function() {
		return $scope.hasMoreData;
	}
	$scope.$on('stateChangeSuccess', function() {
		$scope.loadMore();
	});
	
	$scope.loadComments();

});
