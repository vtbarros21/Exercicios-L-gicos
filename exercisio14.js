// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
//  let numbers = [7,5,6,3,8,9,2,1,4]

let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers);
