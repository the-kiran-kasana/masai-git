// Problem Statement: Write a program that dynamically generates a message for different user roles stored in an object. The object contains a user’s name, role, and active status. Based on the role and active status, print the following messages:


let user = { name: "Alice", role: "admin", active: false };

let message;

if (user.role === "admin") {
  message = user.active ? "Admin Access Granted!" : "Admin Access Revoked";
} else if (user.role === "user") {
  message = user.active ? "User Access Granted!" : "User Access Revoked";
} else {
  message = "Access Denied";
}

console.log(message);
