(function () {
    'use strict';

     angular.module('starter')
       .controller('AccountCtrl', function ($scope) {
        $scope.languages = {
          known: [
            {code: 'fr', name: 'French', level: 'Fluent'},
            {code: 'gb', name: 'English', level: 'Proficient'},
            {code: 'cn', name: 'Chinese', level: 'Newbie'}
          ]
        }

       });
})();
