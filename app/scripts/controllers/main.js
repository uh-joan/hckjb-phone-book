'use strict';

/**
 * @ngdoc function
 * @name phonyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phonyApp
 */
angular.module('phonyApp')
  .controller('MainCtrl', ['contacts', '$mdSidenav', '$mdBottomSheet',
    function (contacts, $mdSidenav, $mdBottomSheet ) {
      var vm = this;

      // Get all contacts from Service
      contacts.getAll().then(function(response){
        vm.contacts = response.contacts;
        vm.selected = vm.contacts[0];
        vm.selected.avatar = 'svg-1';
      }, function(e){
        console.log(e);
      });

      // Select contact
      vm.selectContact = function ( contact , index) {
        vm.selected =  contact;
        vm.selected.avatar = 'svg-'+(index+1);
      };

      // Toggle Sidebar
      vm.toggleList = function(){
        $mdSidenav('left').toggle();
      };

      // Share Contact
      vm.share = function (selectedContact){

        $mdBottomSheet.show({
          controllerAs     : "vm",
          controller       : [ '$mdBottomSheet', ContactSheetController],
          templateUrl      : 'views/bottomsheet.html',
          parent           : angular.element(document.getElementById('content'))
        });

        function ContactSheetController( $mdBottomSheet ) {
          this.user = selectedContact;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/twitter.svg'},
            { name: 'Whatsapp'    , icon: 'whatsapp'    , icon_url: 'assets/whatsapp.svg'},
            { name: 'Snapchat'    , icon: 'snapchat'    , icon_url: 'assets/snapchat.svg'}
          ];
          this.doContact = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet
            $mdBottomSheet.hide(action);
          };
        }
      };


  }]);
