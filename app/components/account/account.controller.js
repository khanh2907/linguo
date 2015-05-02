(function () {
    'use strict';

    angular.module('starter')
        .controller('AccountCtrl', function ($scope, LanguageSelectionService, UserService, $state) {
            $scope.languages = {
                known: LanguageSelectionService.getKnownLanguages(),
                interest: LanguageSelectionService.getInterestLanguages()
            };

            $scope.user = UserService.getUser();

            $scope.updateProfile = function () {
                $state.go('tab.dash');
            }

        });
})();
