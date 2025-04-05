// Problem Statement: Write a program that dynamically generates a message for different user roles stored in an object. The object contains a user’s name, role, and active status. Based on the role and active status, print the following messages:



let users = [
  { name: "Alice", role: "admin", active: false },
  { name: "Bob", role: "user", active: true }
];

for (let user of users) {
  
if((user.role === "admin") && (user.active === true))
{
  console.log("Admin Access Granted!")
}
else
{
  if((user.role === "admin") && (user.active === false))
  {
    console.log("Admin Access Revoked")
  }
  else
  {
    if((user.role === "user") && (user.active === true))
    {
      console.log("User Access Granted!")
    }
    else
    {
      if((user.role === "user") && (user.active === false))
      {
        console.log("User Access Revoked")
      }
      else{
        console.log("Access Denied")
      }
    }
  }
}
}
