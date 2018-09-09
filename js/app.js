var app = angular.module('bingooApp', ['ngRoute']);

app.controller('mainController', function($scope, $http,$rootScope) {
    $rootScope.activeTab='chat'


});
app.controller('groupController', function($scope, $http,$rootScope) {
    $rootScope.activeTab='group';
    $scope.groupList = [
    {
        "userId": "1",
        "userName": "Mehul",
        "availibilityStatus": "busy",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl6.jpg",
        "unreadMsg":"3"
    },
    {
        "userId": "2",
        "userName": "Raghav",
        "availibilityStatus": "available",
        "userStatus": "Hello",
        "userProfileImageURL": "images/thmbnl4.jpg",
        "unreadMsg":"6"
    },
    {
        "userId": "3",
        "userName": "Mehul",
        "availibilityStatus": "offline",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl3.jpg",
        "unreadMsg":"0"
    },
    {
        "userId": "4",
        "userName": "Mehul",
        "availibilityStatus": "available",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl1.jpg",
        "unreadMsg":"9"
    },
    {
        "userId": "5",
        "userName": "Mehul",
        "availibilityStatus": "busy",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl7.jpg",
        "unreadMsg":"0"
    },
    {
        "userId": "6",
        "userName": "Mehul",
        "availibilityStatus": "offline",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl6.jpg",
        "unreadMsg":"3"
    }
];

});
app.controller('chatController', function($scope, $http,$rootScope) {
    $rootScope.activeTab='chat';
    $scope.chatList = [
    {
        "userId": "1",
        "userName": "Mehul",
        "availibilityStatus": "busy",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl6.jpg",
        "unreadMsg":"3"
    },
    {
        "userId": "2",
        "userName": "Raghav",
        "availibilityStatus": "available",
        "userStatus": "Hello",
        "userProfileImageURL": "images/thmbnl4.jpg",
        "unreadMsg":"6"
    },
    {
        "userId": "3",
        "userName": "Mehul",
        "availibilityStatus": "offline",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl3.jpg",
        "unreadMsg":"0"
    },
    {
        "userId": "4",
        "userName": "Mehul",
        "availibilityStatus": "available",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl1.jpg",
        "unreadMsg":"9"
    },
    {
        "userId": "5",
        "userName": "Mehul",
        "availibilityStatus": "busy",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl7.jpg",
        "unreadMsg":"0"
    },
    {
        "userId": "6",
        "userName": "Mehul",
        "availibilityStatus": "offline",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl6.jpg",
        "unreadMsg":"3"
    }
];

});
app.controller('chatRoomController', function($scope, $http,$rootScope) {
    $rootScope.activeTab='chatRoom';
          $scope.friendsList = [
    {
        "userId": "1",
        "userName": "Mehul",
        "availibilityStatus": "busy",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl6.jpg"
    },
    {
        "userId": "2",
        "userName": "Raghav",
        "availibilityStatus": "available",
        "userStatus": "Hello",
        "userProfileImageURL": "images/thmbnl4.jpg"
    },
    {
        "userId": "3",
        "userName": "Mehul",
        "availibilityStatus": "offline",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl3.jpg"
    },
    {
        "userId": "4",
        "userName": "Mehul",
        "availibilityStatus": "available",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl1.jpg"
    },
    {
        "userId": "5",
        "userName": "Mehul",
        "availibilityStatus": "busy",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl7.jpg"
    },
    {
        "userId": "6",
        "userName": "Mehul",
        "availibilityStatus": "offline",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl6.jpg"
    }
];

});
app.controller('contactController', function($scope, $http,$rootScope) {
    $rootScope.activeTab='contact';
        $scope.friendsList = [
    {
        "userId": "1",
        "userName": "Mehul",
        "availibilityStatus": "busy",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl6.jpg"
    },
    {
        "userId": "2",
        "userName": "Raghav",
        "availibilityStatus": "available",
        "userStatus": "Hello",
        "userProfileImageURL": "images/thmbnl4.jpg"
    },
    {
        "userId": "3",
        "userName": "Mehul",
        "availibilityStatus": "offline",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl3.jpg"
    },
    {
        "userId": "4",
        "userName": "Mehul",
        "availibilityStatus": "available",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl1.jpg"
    },
    {
        "userId": "5",
        "userName": "Mehul",
        "availibilityStatus": "busy",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl7.jpg"
    },
    {
        "userId": "6",
        "userName": "Mehul",
        "availibilityStatus": "offline",
        "userStatus": "Hello World",
        "userProfileImageURL": "images/thmbnl6.jpg"
    }
];

});

app.config(['$routeProvider',         //templating/routing 
    function($routeProvider) {
        $routeProvider
            .when('/groups', {
                templateUrl: 'partials/groups.tmpl'
            })
           .when('/chatRoom', {
                templateUrl: 'partials/chatRoom.tmpl'
            })
           .when('/chat', {
                templateUrl: 'partials/chat.tmpl'
            })
           .when('/contacts', {
                templateUrl: 'partials/contacts.tmpl'
            })
           .when('/', {
                templateUrl: 'partials/mainView.tmpl'
            })
    }
]);

