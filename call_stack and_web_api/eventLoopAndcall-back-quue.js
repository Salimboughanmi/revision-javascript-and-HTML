// Event Loop And Callback Queue
 /* To Understand Ajax, Fetch, Promises 
-.Event Loop + Callback Queue 
Story 

 --javaStript Is.A Single Threaded Language "All Operations Executed in Single Thread' .
 -- Call Stack,Track All Calls
 -- Every Function Is Done Its Poped Out 
  --When You Call Asynchronous Function It Sent To Browser API 
  --Asynchronous Function Like Settimeout Start Its Own Thread 
  -- Browser API Act As s Second Thread 
  -- API Finish Waiting And Send Back The Function Far Processing
  -- Browser API ,Add The Callback To Callback Qwueue 
   --Event Loop Wait For Call Stack To-Be Empty 
   --Event Loop Get Callback From Callback Queue And Add It To Call Stack 
    --Callback Queue Follow FIFO "First In First Out" Rule 

 */