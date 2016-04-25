var ui = angular.module("uirouter",['ui.router']);
ui.config(function($stateProvider,$urlRouterProvider){

	//$urlRouterProvider.otherwise("/state");//配置默认路由的跳转

	$stateProvider
	.state("state1",{
		templateUrl:"tpls/state1.html"
	})
	.state("state2",{
		templateUrl:"tpls/state2.html"
	})
	.state("state3",{
		views:{
			"":{//这里你如果起名字那么ui-view也要和这里一样的名字
				templateUrl:"tpls/state3.html"
			}
		}
	})
});
ui.run(function($rootScope,$state,$stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	$state.go("state3");//会跳转到state下的名为state3的html文件也就是state3.html
});
