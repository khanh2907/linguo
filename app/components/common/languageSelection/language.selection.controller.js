(function () {
    'use strict';

    angular.module('starter')
        .controller('LanguageSelectionCtrl', function ($scope, LanguageService, LanguageSelectionService, $ionicHistory) {
            var languageList = LanguageService.getLanguages();

            var init = function () {
                var knownLanguages = LanguageSelectionService.getKnownLanguages();
                var language;

                $scope.languages = [];

                angular.forEach(languageList, function (value) {
                    language = value;
                    language.value = LanguageService.getLanguageByCodeFromList(knownLanguages, language.code) !== false;

                    $scope.languages.push(language);
                });
            };

            $scope.update = function () {
                var interestLanguages = [];

                angular.forEach($scope.languages, function (selectedLanguage) {
                    if (selectedLanguage.value === true) {
                        interestLanguages.push(LanguageService.getLanguageByCode(selectedLanguage.code));
                    }
                });

                LanguageSelectionService.setKnownLanguages(interestLanguages);
                $ionicHistory.goBack();
            };


            init();
        });
})();
