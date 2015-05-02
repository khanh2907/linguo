(function () {
    'use strict';

    angular.module('starter')
        .controller('LanguageSelectionCtrl', function ($scope, LanguageService, LanguageSelectionService, $ionicHistory, $stateParams, languageType) {
            var languageList = LanguageService.getLanguages();

            $scope.form = {
                search : ""
            };

            var init = function () {
                var selectedLanguages;
                var language;

                $scope.languages = [];

                if ($stateParams.type === languageType.KNOWN) {
                    selectedLanguages = LanguageSelectionService.getKnownLanguages();
                } else if ($stateParams.type === languageType.INTEREST) {
                    selectedLanguages = LanguageSelectionService.getInterestLanguages();
                } else {
                    $ionicHistory.goBack();
                }

                angular.forEach(languageList, function (value) {
                    language = value;
                    language.value = LanguageService.getLanguageByCodeFromList(selectedLanguages, language.code) !== false;

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

                if ($stateParams.type === languageType.KNOWN) {
                    LanguageSelectionService.setKnownLanguages(interestLanguages);
                } else if ($stateParams.type === languageType.INTEREST) {
                    LanguageSelectionService.setInterestLanguages(interestLanguages);
                }

                $ionicHistory.goBack();
            };

            $scope.searchLanguage = function () {
                $scope.languagesSearched = LanguageService.searchLanguageByNameFromList($scope.languages, $scope.form.search);
            };



            init();
        });
})();
