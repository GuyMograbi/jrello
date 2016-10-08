

 - [ ] Add backend endpoint to save the data 
   - [ ] add mongo. 
   - [ ] add the endpoints
   - [ ] add a middleware to get the board
   - [ ] use the endpoint from the frontend
 - [ ] broadcast the changes back to the frontend
   - [ ] open a websocket
   - [ ] manage updates in frontend
   - [ ] manage sockets and updates in the backend
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