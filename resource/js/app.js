
// 定义全局的用户信息， 这里从后台获取
var _GLOBAL = {
    "api": "http://xxx/Mapi"
};
var _userInfo = {
    "username": "ydkhd",
    "name": "移动客户端",
    "uid": '7',
    "brand": 'SP',
    "deviceuid": "25b3f30856a38f895b4fa77fcbfc488b2374ae07df40c3425aa6adadbf37e41e",
    "token": "mqNQR5BibIRRswBp3xNN",
    "devicename": "iPhone"
};

angular.module('myApp', ['ionic', 'myControllers', 'myFilters']).config(function($httpProvider) {
    $httpProvider.defaults.transformRequest = function(obj) {
        var str = [];
        for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
        return str.join("&");
    }
    $httpProvider.defaults.headers.post = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).config(function($stateProvider, $urlRouterProvider) {
    //这里是根url
    $stateProvider.state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "resource/views/tabs.html"
    }).state('tabs.index', {
        url: "/index",
        views: {
            'tab-index': {
                templateUrl: "resource/views/index.html",
                controller: 'IndexCtrl'
            }
        }
    }).state('tabs.explore', {
        url: "/explore",
        views: {
            'tab-explore': {
                templateUrl: "resource/views/explore.html",
                controller: 'ExploreCtrl'
            }
        }
    }).state('tabs.exploreList', {
        url: "/exploreList/:type",
        views: {
            'tab-explore': {
                templateUrl: "resource/views/exploreList.html",
                controller: 'ExploreListCtrl'
            }
        }
    }).state('tabs.exploreDetail', {
        url: "/exploreDetail/:type",
        views: {
            'tab-explore': {
                templateUrl: "resource/views/exploreDetail.html",
                controller: 'ExploreDetailCtrl'
            }
        }
    }).state('tabs.comments', {
        url: "/comments",
        views: {
            'tab-comments': {
                templateUrl: "resource/views/comments.html",
                controller: 'CommentsCtrl'
            }
        }
    }).state('tabs.my', {
        url: "/my",
        views: {
            'tab-my': {
                templateUrl: "resource/views/my.html",
                controller: 'MyCtrl'
            }
        }
    }).state('tabs.myResource', {
        url: "/myResource",
        views: {
            'tab-my': {
                templateUrl: "resource/views/myResource.html",
                controller: 'MyResourceCtrl'
            }
        }
    }).state('tabs.myFavor', {
        url: "/myFavor",
        views: {
            'tab-my': {
                templateUrl: "resource/views/myFavor.html",
                controller: 'MyFavorCtrl'
            }
        }
    }).state('tabs.feed', {
        url: "/feed",
        views: {
            'tab-my': {
                templateUrl: "resource/views/feed.html",
                controller: 'FeedCtrl'
            }
        }
    }).state('tabs.about', {
        url: "/about",
        views: {
            'tab-my': {
                templateUrl: "resource/views/about.html",
                controller: 'AboutCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise("/tab/index");

});
