angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('JournalCtrl', function($scope, $ionicModal, Journal) {
  $scope.journal = Journal.all();

  $scope.entry = {};  // Define entry before we use the modal so we can clear out our data


  $ionicModal.fromTemplateUrl('templates/modals/entry.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.showEntryModal = function() {
    $scope.modal.show();
  };

  $scope.closeEntryModal = function(entry) {
    $scope.modal.hide();

    if (angular.isDefined(entry.title) && angular.isDefined(entry.content))
      Journal.add(entry);

    $scope.entry = {};
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
