function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combiledAges = combine(30, 26, 'as-number');
console.log(combiledAges);
var combiledStringAges = combine('30', '26', 'as-number');
console.log(combiledStringAges);
var combiledNames = combine('Max', 'Anna', 'as-text');
console.log(combiledNames);
