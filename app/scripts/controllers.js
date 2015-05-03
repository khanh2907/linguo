angular.module('starter.controllers', ['ionic.contrib.ui.tinderCards'])

    .controller('DashCtrl', function ($scope, $state) {

        $scope.myImage = "https://pbs.twimg.com/profile_images/560599011623575553/UprfT-or.jpeg";

        $scope.cards = [
            {name: 'Bob', age: 21, languages: ['English', 'Japanese'], from: 'au', image: 'https://pbs.twimg.com/profile_images/546942133496995840/k7JAxvgq.jpeg'},
            {name: 'Joe', age: 24, languages: ['English'], from: 'gb', image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'},
            {name: 'John', age: 26, languages: ['English', 'French'], from: 'us', image: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'}
        ];

        $scope.bobImage = "https://pbs.twimg.com/profile_images/546942133496995840/k7JAxvgq.jpeg";

        $scope.cardDestroyed = function (index) {
            $scope.cards.splice(index, 1);
        };

        $scope.cardSwipedLeft = function (index) {
            $scope.cards.pop();
        };

        $scope.cardSwipedRight = function (index) {
            $scope.cards.pop();
        };


    })

    .controller('ChatsCtrl', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    });
