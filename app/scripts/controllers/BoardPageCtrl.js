angular.module('jrello').controller('BoardPageCtrl', function ($scope, $websocket, JrelloClient, $timeout) {
  
  JrelloClient.boards.read().then(function(result){
    $scope.board = result.data;

    var locked = false
    function updateBoard() {
      locked = true
      JrelloClient.boards.update($scope.board).then(function(){
        locked = false
      })
    }
    
    function updateBoardIfNotLocked(){
      if (locked){
        updateWithThrottle()
      }else{
        updateBoard()
      }
    }
    
    var updateWithThrottle = _.debounce(updateBoardIfNotLocked,500)
    $scope.$watch('board', updateWithThrottle, true)
  })

  $scope.addList = function () {
    if (!$scope.board.lists){
      $scope.board.lists = []
    }
    $scope.board.lists.push({name: 'new list', tickets: []})
  }

  var ws = $websocket.$new(window.location.origin.replace('http:', 'ws:').replace('https:', 'wss:') + '/backend/websocket')

  ws.$on('$message', function (msg) {
    console.log('from $message', msg)
    $timeout(function () {
      if (msg.type === 'boardUpdate') {
        $scope.board = msg.data
      }
    }, 0)
  })

  $scope.addTicket = function (list) {
    list.tickets.push({})
  }
})
