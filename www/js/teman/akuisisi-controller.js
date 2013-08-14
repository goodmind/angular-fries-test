(function(window){

  window.app.controller('MainController', function($scope, State, ActionBars){
    State.nextTransition({ type : 'push'});
    ActionBars.checkActionOverflow();

    $scope.refresh = function(){
      console.log('refresh')
    }
  })

  window.app.controller('NextController', function($scope, $location, State){
    State.nextTransition({ type : 'pop'});
    $scope.back = function(){
      $location.path('/')
    }
  })

  window.app.controller('AddController', function($scope, $location, State){
    State.nextTransition({ type : 'pop'});
    $scope.back = function(){
      $location.path('/')
    }
  })

  window.app.controller('AccountController', function($scope, $location, State){
    State.nextTransition({ type : 'pop'});
    $scope.back = function(){
      $location.path('/')
    }
  })

  window.app.controller('SettingsController', function($scope, $location, State){
    State.nextTransition({ type : 'pop'});
    $scope.back = function(){
      $location.path('/')
    }
  })

  window.app.controller('TransitionController', function($scope, State, ActionBars){

    $scope.$watch(function(){return State.nextTransition()}, 
      function(transition){ $scope.transition = transition.type; ActionBars.checkActionOverflow();}, 
      true);
  })

})(window)