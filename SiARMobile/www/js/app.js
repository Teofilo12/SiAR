// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('SiAR', ['ionic', 'SiAR.services','ionic-material']);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
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

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    //controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html'
      }
    }
  })
  .state('app.playlists', {
    url: '/playlists',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.gerarProtocolo', {
    url: '/gerarProtocolo',
    views: {
      'menuContent': {
        templateUrl: 'templates/gerarProtocolo.html',
        controller: 'ProtocoloCtrl'
      }
    }
  })

  .state('app.validarProtocolo', {
    url: '/validarProtocolo',
    views: {
      'menuContent': {
        templateUrl: 'templates/validarProtocolo.html',
        controller: 'ProtocoloCtrl'
      }
    }
  })

  .state('app.pictures', {
    url: '/tab-pictures',
    views: {
      'menuContent': {
        templateUrl: 'templates/tab-pictures.html',
        controller: 'PicturesCtrl'
      }
    }
  })

.state('app.cadastrarTarefas', {
    url: '/cadastrarTarefas',
    views: {
      'menuContent': {
        templateUrl: 'templates/cadastrarTarefas.html',
        controller: 'TarefasCtrl'
      }
    }
  })
  
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/BaterPonto');
});