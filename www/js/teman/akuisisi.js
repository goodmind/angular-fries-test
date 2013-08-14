(function(window){

var app = angular.module('TemanAkuisisi',[]);

app.service('State', function(){
  var transition = { type : 'push'}

  return {
    nextTransition : function(nextTransition){
      if(nextTransition) {
        transition.type = nextTransition.type;
      }
      else{
        return transition;  
      }
    }
  }
})

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',
  {
    controller: 'MainController',
    templateUrl: '/views/main.html'
  })
  .when('/next', {
    controller: 'NextController',
    templateUrl: '/views/next.html'
  })
  .when('/add', {
    controller: 'AddController',
    templateUrl: '/views/add.html'
  })
  .when('/account', {
    controller: 'AccountController',
    templateUrl: '/views/account.html'
  })
  .when('/settings', {
    controller: 'SettingsController',
    templateUrl: '/views/settings.html'
  })
  .otherwise({ redirectTo: '/'});

  $locationProvider.html5Mode(true)
})

window.app = app

})(window)




