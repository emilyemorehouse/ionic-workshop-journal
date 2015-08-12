angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('JournalCtrl', function($scope, $ionicModal, $ionicPopup, Journal) {
  $scope.journal = Journal.all();   // Grab all of our entries

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

    // Make sure we have form data, then hide/save/clear form
    if (angular.isDefined(entry.title) && angular.isDefined(entry.content)) {
      $scope.modal.hide();
      Journal.add(entry);
      $scope.entry = {};
    }
    // Don't allow an incomplete form!
    else {
      var alertPopup = $ionicPopup.alert({
        title: 'STOP RIGHT THERE!',
        template: 'Please fill out all fields.',
        buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
          text: 'Say you\'re sorry.',
          type: 'button-royal'
        }]
      });
    }
  };

  $scope.cancelEntryModal = function() {
    $scope.modal.hide();
    $scope.entry = {};
  };

  $scope.remove = function(entry) {
    Journal.remove(entry);
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
