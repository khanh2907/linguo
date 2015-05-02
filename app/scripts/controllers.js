angular.module('starter.controllers', ['ionic.contrib.ui.tinderCards'])

.controller('DashCtrl', function($scope, TDCardDelegate) {

    $scope.cards = [
        { name: 'Bob', age: 21, languages: ['English', 'Japanese'], from: 'au', image: 'https://pbs.twimg.com/profile_images/546942133496995840/k7JAxvgq.jpeg' },
        { name: 'Joe', age: 24, languages: ['English'], from: 'gb', image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' },
        { name: 'John', age: 26, languages: ['English', 'French'], from: 'us', image: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg' },
      ];

    $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
    };

    $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    // $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    // $scope.addCard();
  };


})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
