'use strict';

angular.module('app')
	.controller('paramController', [ '$rootScope', '$scope', '$http', '$state',
	                                function($rootScope, $scope, $http, $state) {
		$scope.title = '参数管理';
        $scope.param = { };
        $scope.loading = false;
        
		$scope.search = function () {
	        $scope.loading = true;
			$.ajax({
				type: 'get',
				url : '/param/read/page',
				data: $scope.param
			}).then(function(result) {
		        $scope.loading = false;
				if (result.code == 200) {
					$scope.pageInfo = result;
				} else {
					$scope.msg = result.msg;
				}
				$scope.$apply();
			});
		}
		
		$scope.search();
		
		$scope.clearSearch = function() {
			$scope.param.keyword= null;
			$scope.search();
		}
		
		$scope.disableItem = function(id, enable) {
			
		}
		
		// 翻页
        $scope.pagination = function (page) {
            $scope.param.pageNumber=page;
            $scope.search();
        };
} ]);