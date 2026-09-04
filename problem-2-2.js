// Problem 2 — Active User Filter
//  Function Name Must be: filterActiveUsers
// A social media platform needs to check the status of its users. 
// The user list is provided as an array of objects. 
// The function must return an array containing only the users whose isActive property is true.

// Input
// An array of objects, where each object contains name and isActive properties.
// Example:
// [
//  {name:"A", isActive:true},
//  {name:"B", isActive:false}
// ]



// Output
// Return an array containing only the users with isActive: true.
// Example:
// [{name:"A", isActive:true}]


// Challenge
// Return "Invalid" if:
// The input is not an array
// The array is empty
// An object does not have the isActive property

// Tips: Try using the filter() method.

// Starter Code:
function filterActiveUsers(users) {
 if (!Array.isArray(users)|| users.length===0){
    return Invalid
 }
 else if(users.find(user=> !("isActive" in user ))){
    return Invalid
 }
 return users.find(user=> user.isActive===true)
}

let users=[
 {name:"A", isActive:true},
 {name:"B", isActive:false}
]
console.log(filterActiveUsers(users))
