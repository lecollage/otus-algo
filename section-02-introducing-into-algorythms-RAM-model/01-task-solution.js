// 1. Написать на RAM алгоритм умножения двух целых неотрицательных чисел через сложение
var sum = function (first, second) {
    var index = second;
    var returnableValue = first;
    if (index > 1) {
        while (--index) {
            returnableValue += first;
        }
    }
    else if (index === 0) {
        returnableValue = 0;
    }
    return returnableValue;
};
console.log("sum(1, 1): " + sum(1, 1));
console.log("sum(0, 1): " + sum(0, 1));
console.log("sum(0, 2): " + sum(0, 2));
console.log("sum(2, 0): " + sum(2, 0));
console.log("sum(2, 2): " + sum(2, 2));
console.log("sum(9, 9): " + sum(9, 9));
console.log("sum(88888888888888888888888888888888888888888888888, 99): " + sum(88888888888888888888888888888888888888888888888, 99));
