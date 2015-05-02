(function () {
    'use strict';

    angular.module('starter')
        .controller('AccountCtrl', function ($scope, LanguageSelectionService) {
            $scope.languages = {
                known: LanguageSelectionService.getKnownLanguages()
            };

        });
})();
