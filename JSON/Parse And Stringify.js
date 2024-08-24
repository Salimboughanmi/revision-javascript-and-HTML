/* JSON
 - JSON.parse=> convert text data to js Object
 - JSON.stringify=> convert JS object to JSON */

 const MyJsonObjectFromServer ='{"username" : "salim" ,"age":"30" }' ;
 console.log(typeof MyJsonObjectFromServer) // type string
 console.log(MyJsonObjectFromServer) // type string

 const MyJsObject = JSON.parse(MyJsonObjectFromServer)
 console.log(typeof MyJsObject) // type object
 console.log(MyJsObject) // type object

 MyJsObject["username"] = "sami"
MyJsObject["age"] = "20"

 //console.log(MyJsObject) 

 const MyJsonObjectToServer =JSON.stringify(MyJsObject) // convert a javascrpt value to a javascript object notation (JSON)
 console.log(typeof MyJsonObjectToServer) // type object
 console.log(MyJsonObjectToServer) // type object
