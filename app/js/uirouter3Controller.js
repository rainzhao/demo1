/**
 * Created by zhaoy on 2016/4/24.
 */
angular.module("ui3controllers",[])
    .controller('contactCtrl',["$scope",function($scope) {
    //测试数据
        $scope.contactdata = [
            {
                "id":"1",
                "name":"zhaoyu",
                "age":"21",
                "sex":"男"
            },
            {
                "id":"2",
                "name":"zhangsan",
                "age" : "22",
                "sex" : "女"
            },
            {
                "id":"3",
                "name":"lisi",
                "age" : "20",
                "sex" : "男"
            }
        ]
    }])
    .controller('contact-detailCtrl',['$scope','$stateParams',function($scope,$stateParams){
        console.log($stateParams.eleId);
        switch ($stateParams.eleId){
            case '1': $scope.datas = {"name":"zhaoyu","age":"21","sex":"男"};break;
            case '2': $scope.datas = {"name":"zhangsan","age":"20","sex":"女"};break;
            case '3': $scope.datas = {"name":"lisi","age":"21","sex":"男"};break;
        }
    }])