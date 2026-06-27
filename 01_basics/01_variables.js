const accountId = 14453
let accountEmail = "ali@google.com "
var accPassword = "12345"
accCity = "Rawalpindi" // not good method 

// accountId = 4
accountEmail = "Aliiii@yahoo.com"
accPassword = "22222"
accCity = "Isl"

console.log(accountId);

/*
prefer not to use var as 
it causes the issue of 
scope  in the java scriptt 
*/

console.table([accountId,accPassword, accountEmail , accCity])

