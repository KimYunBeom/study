function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
// let combineValues: Function;
var combineValues;
combineValues = add;
combineValues = printResult; // argument가 1개이다
// combineValues = 5;
console.log(combineValues(8, 8));
