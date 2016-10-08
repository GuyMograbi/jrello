
Adding Websockets
==================

References
 
 - https://github.com/websockets/ws/issues/326
 - http://stackoverflow.com/questions/10406930/how-to-construct-a-websocket-uri-relative-to-the-page-uri
 
 
Using for backend 'ws' library

```
npm install -S ws
```

and for frontend `ng-websocket`

```
bower install -S ng-websocket
```

Lets set the frontend first according to documentation. Here are a few hints

```
<script .. >

angular.module(' ', [ 'ngWebsocket' ] )

controller( ' ', function ($websocket) {

   $websocket.$new('ws://' ).on('$message', function(){})
})
```

and now the backend
```
var ws = require('ws')
var http = require('http')

var server = http.createServer(app);

var wss = new ws.Server({ server: server, path: '/backend/websocket' });
wss.on('connection', function(ws) {
  console.log('connection');
  
  var cancelInterval = setInterval(function(){
    try {
      console.log('sending hello')
      ws.send('hello')
    }catch(e){
      clearInterval(cancelInterval);
    }
  },1000)
  ws.on('open', function(){
    
    console.log('connected')
  })
});
```

I think position is important



### Publish the data to the backend



Persist the data
=================





