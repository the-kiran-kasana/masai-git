// Problem Statement: You are given an object representing a book with properties such as title, author, and year. Your task is to use the for...in loop to traverse through the object and print each key along with its associated value in the format: key: value.

let book = { 
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
};

let str = ""

for(let x in book)
{
str = str + x + ": " + book[x] +" " ;
}

console.log(str)