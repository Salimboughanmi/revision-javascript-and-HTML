/* 
• AJAX •
 - Asynchronous 3avaScript And XML 
 - Approach to Use Many Technologies Together [HTML, CSS, js ,DOM]
 - It Use "XMLHttpRequest" Object To Interact With The Server 
 - You Can Fetch-Data Or Send Data Without Page Refresh 
- Examples :
----- Youtube Studio 
------ Google Drive 
--------UploadeArticle Photo 
---------Form Check Name 

-Test new-XMLHttpRequest();
-Request And Response 
 Status Code 
 */
/* 
• AJAX •
   - ready State => status of the request 
 [0] Request not initialized
 [1] Server Connection established
 [2] Request Received
 [3] Processing Request
 [4] Request is finished and response is ready
------ status : 
-------[200] : response secc
---------[404] : not found


 */

 console.log("**************************** Request And Response From Real API ****************************");
 let myRequest = new XMLHttpRequest();
 myRequest.open("GET" ,"https://api.github.com/users/elzerowebschool/repos" ) // presis la request methode GET , post ...
 myRequest.send() ; // send request
 console.log(myRequest);

   myRequest.onreadystatechange = function () {
   // console.log(myRequest.readyState);
    //console.log(myRequest.status);
if(this.readyState === 4 && this.status === 200){
    console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    for (let i =0 ; i < jsData.length ; i++ ){
        let div = document.createElement("div");
        let repoName = document.createTextNode(jsData[i].full_name);
        div.appendChild(repoName);
        document.body.appendChild(div)
    }
}
 };  
  