let matrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1],
    [6, 4, 5, 2, 3],
    [7, 8, 9, 1, 2]
];


let N = matrix.length;
let M = matrix[0].length;
let result = [];

for (let row = 0; row < N; row++) {
        if (row % 2 === 0) {
            for (let col = M - 1; col >= 0; col--) {
                result.push(matrix[row][col]);
            }
        } else {
            for (let col = 0; col < M; col++) {
                result.push(matrix[row][col]);
            }
        }
    }
    
    console.log(result.join(" "));

