/**
 * Created by zhaoy on 2016/4/24.
 */
var ui3 = angular.module("uirouter3",["ui.router","ui3controllers"]);
    ui3.config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/contact");
        $stateProvider
            .state('contact',{
                url:'/contact',
                views:{
                    "":{
                        templateUrl:"tpls/contact.html",
                        controller: "contactCtrl"
                    }
                }
            })

            .state('con-detail',{
                url:'/contact/:eleId',
                views:{
                    "":{
                        templateUrl:"tpls/con-detail.html",
                        controller:"contact-detailCtrl"
                    }
                }
            })
    });


