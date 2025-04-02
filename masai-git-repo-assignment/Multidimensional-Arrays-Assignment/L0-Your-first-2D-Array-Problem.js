// Problem Statement: YYou are given a 2D array, whose dimensions are stored in two variables with the name N and M

let N = 3 
let M = 2
let str = ""

let arr = [
          [1,2],
          [3,4],
          [5,6]
        ]

for(let i=0;i<N;i++)
{
    for(let j=0;j<M;j++)
    {
        str = str + arr[i][j] + " "
    }

    console.log(str);
    str = "";
}

