'use strict';

/**
 * @ngdoc overview
 * @name phonyApp
 * @description
 * # phonyApp
 *
 * Main module of the application.
 */
angular
  .module('phonyApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ngMdIcons'
  ])
  .value('contactsUrl', 'http://www.mocky.io/v2/583e0bc31200009214c045a8')
  .config(function($sceProvider) {
    // ngMaterial $mdIconProvider will be updated  to mark urls as         safe.
    // Meanwhile, disable $sce for ngMaterial CodePen Demos that           using external SVGs
    $sceProvider.enabled(false);
  })
  .config(function( $mdIconProvider , $mdThemingProvider){
    // Register the icons
    $mdIconProvider
      .defaultIconSet("assets/avatars.svg", 128)
      .icon("share"      , "assets/share.svg"       , 24)
      .icon("menu"      , "assets/menu.svg"         , 24)
      .icon("google_plus", "assets/google_plus.svg" , 512)
      .icon("hangouts"   , "assets/hangouts.svg"    , 512)
      .icon("twitter"    , "assets/twitter.svg"     , 512)
      .icon("phone"      , "assets/phone.svg"       , 512)
      .icon("whatsapp"   , "assets/whatsapp.svg"    , 512)
      .icon("snapchat"   , "assets/snapchat.svg"    , 512);

    $mdThemingProvider.theme('default')
      .primaryPalette('brown')
      .accentPalette('red');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
