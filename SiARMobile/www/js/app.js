// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('SiAR', ['ionic', 'SiAR.services','ionic-material']);

app.run(function ($ionicPlatform, GeoAlert) {
  $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }

      var lat = -15.8178547;
      var long = -47.8367635;

      GeoAlert.begin(lat,long, function() {
          console.log('TARGET');
          alert('você está perto do restaurante e está autorizado a bater ponto');
          GeoAlert.end();
      });

  });
})

app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('BaterPonto', {
    url: '/BaterPonto',
    templateUrl: 'templates/BaterPonto.html',
    controller: 'BaterPontoCtrl',
    // resolve: {
    //   funcionario: function (funcionarioAPI) {
    //       return funcionarioAPI.getFuncionarios();
    //   }
    // }
  })

  .state('Cardapio', {
    url: '/cardapio',
    templateUrl: 'templates/cardapio.html',
    controller: 'CardapioCtrl',
    resolve: {
          cardapio: function (cardapioAPI) {
              return cardapioAPI.getItensDoCardapio();
          }
      }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/BaterPonto');
});