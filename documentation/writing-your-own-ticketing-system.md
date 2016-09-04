
Write Your Own Ticketing System
================================

In this tutorial we will start a ticketing system startup from scratch.   
At every step, we will consider the minimal viable product requirements and implement them.   

As inspiration, lets use trello since it is very powerful yet simple enough for this tutorial.   
Trello's model contains multiple boards per user. Each board contains multiple list and each list contains multiple tickets.    


The stack I will use is the MEAN stack, and to get things started, I use [a scaffold project](https://github.com/coder-on-deck/nodejs-easy-setup) that includes a basic angular setup and a backend.
 

Step 1 - Managing tickets on a board
============================

For the first step I chose to assume a single board and implement list and tickets management on that board.    
I am also ignoring users and collaboration features for now.

## Frontend

First lets setup a board view that allows users to add lists and tickets.
   
For that we will define a page in angular   

```js
angular.module('demo', ['ngRoute']).config(function ($routeProvider) {
  console.log('configuring')

  $routeProvider
    .when('/board', {
      controller: 'BoardPageCtrl',
      templateUrl: '/app/views/board_page.html'
    })
    .otherwise({redirectTo: '/board'})
})

```

Then we will define the controller to have

 - Some mock data to use
 - Adding a list ability
 - Adding a ticket ability

```
angular.module('demo').controller('BoardPageCtrl', function ($scope) {
  $scope.lists = [
    {
      name: 'list 1',
      tickets: [
        {title: 'task 1'},
        {title: 'task 2'}
      ]
    },
    {
      name: 'list 2',
      tickets: [
        {title: 'task 3'},
        {title: 'task 4'}
      ]
    }
  ]

  $scope.addList = function () {
    $scope.lists.push({name: 'new list', tickets: []})
  }

  $scope.addTicket = function (list) {
    list.tickets.push({})
  }
})
```

Now lets add the view to display the lists and tickets

```
<div id="board-page" ng-dblclick="addList()">
    <div ng-repeat="list in lists" class="list">
        <input class="list-name" ng-model="list.name"/>
        <div class="list-content">
            <div ng-repeat="ticket in list.tickets" class="ticket">
                <input class="ticket-title" ng-model="ticket.title"/>
            </div>
        </div>
        <button class="add-ticket" ng-click="addTicket(list)"> Add Ticket </button>
    </div>
</div>
```

And last but not least lets add some style

```
```

## Backend

For the backend, we will have 2 APIs. 

 - Get the board
 - Save the board
 
```
TBD
```


