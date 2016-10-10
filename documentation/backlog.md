

 - [ ] Add backend endpoint to save the data 
   - [ ] add mongo. 
   - [X] add the endpoints
   - [X] add a middleware to get the board
   - [X] use the endpoint from the frontend
   - [ ] Talk about the time assumption - that the connection is ready soon enough and possible solutions
   - [ ] Talk about AbstractModule and DbService options. 
 - [ ] broadcast the changes back to the frontend
   - [X] open a websocket
   - [X] manage updates in frontend
   - [X] manage sockets and updates in the backend
   - [ ] talk about the problem with distributed system
     - [ ] talk about sticky load balancing - http://socket.io/docs/using-multiple-nodes/
     - [ ] talk about mongo events - https://www.npmjs.com/package/mongo-watch
     - [ ] talk about a centralized websocket server
   - [ ] talk about the collaboration bugs
     - [ ] demo the solution to break down the save to smaller parts

===> if need to fill in more time, I will choose one of the following topics

   - [ ] improving the 'add list' with double click -  add list according to click position
   - [ ] adding 'delete' to tickets and lists
   - [ ] adding 'archive' to tickets and lists
   - [ ] deploy to heroku
   - [ ] integrating with a CI - travis, circle etc.. 
   - [ ] start a system test
   - [ ] continuous delivery with jenkins (cloudbees?)